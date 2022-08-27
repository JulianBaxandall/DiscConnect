class Api::V1::RegistrationsController < ApplicationController
    protect_from_forgery unless: -> { request.format.json?}

    def create
        if !Registration.find_by(user_id: params[:user_id], team_id: params[:team_id])
            registration = Registration.create(registration_params)
            if registration.save
                Invite.find_by(user_id: params[:user_id], team_id: params[:team_id], role: params[:role]).delete
                render json: registration
            else
                render json: {error: registration.errors.full_messages}, status: :unprocessable_entity
            end
        else
            render json: {error: "Registration already exists"}, status: :unprocessable_entity
        end
    end

    private

    def registration_params
        params.require(:registration).permit(:user_id, :team_id, :role) 
    end

end