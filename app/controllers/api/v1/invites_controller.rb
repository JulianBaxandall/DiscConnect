class Api::V1::InvitesController < ApplicationController
    protect_from_forgery unless: -> { request.format.json?}

    def index
        invites = Invite.where(user_id: current_user.id).to_json

        render json: invites
    end

    def create
        invite = Invite.create(invite_params)
        if invite.save
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