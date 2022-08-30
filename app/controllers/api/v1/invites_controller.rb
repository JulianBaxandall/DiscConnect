class Api::V1::InvitesController < ApplicationController
    protect_from_forgery unless: -> { request.format.json?}

    def index
        invites = Invite.where(user_id: current_user.id).to_json
        render json: invites
    end

    def create
        invite = Invite.create(invite_params)
        if invite.save
            @invitee = User.find_by(id: invite.user_id)
            @invite = invite
            InviteMailer.new_invite(@invite, @invitee).deliver_now
            flash[:msg] = "Invite sent successfully"
            render json: invite
        else
            render json: {error: invite.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def invite_params
        params.require(:invite).permit(:user_id, :team_id, :role, :message) 
    end

end