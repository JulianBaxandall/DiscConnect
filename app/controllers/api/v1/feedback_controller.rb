class Api::V1::FeedbackController < ApplicationController
    protect_from_forgery unless: -> { request.format.json?}

    def index
        current_user_id = current_user.id
        registration = Registration.find_by(user_id: current_user_id, team_id: params[:team_id])
        if registration
            if registration.role === "captain"
                team = Team.find(params[:team_id])
                serialized_team = ActiveModelSerializers::SerializableResource.new(team, serializer: TeamFeedbackSerializer).to_json
                render json: serialized_team
            else
                render json: current_user_id
            end
        else
            render json: current_user_id
        end
    end

    def create 
        feedback = Feedback.create(feedback_params)
        feedback.team_id = params[:team_id]
        # binding.pry
        if feedback.save
            flash[:msg] = "Feedback added successfully"
            render json: feedback
        else
            render json: {error: feedback.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def feedback_params
        params.require(:feedback).permit(:title, :category, :body, :team_id) 
    end
end