class Api::V1::InvitesController < ApplicationController
    protect_from_forgery unless: -> { request.format.json?}

    def index
        invites = Invite.where(user_id: current_user.id).to_json

        render json: invites
    end

end