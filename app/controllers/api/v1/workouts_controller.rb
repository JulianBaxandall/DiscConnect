class Api::V1::WorkoutsController < ApplicationController
    
    protect_from_forgery unless: -> { request.format.json?}
    before_action :authenticate_user!

    def create
        workout = Workout.create(workout_params)
        workout.user_id = current_user.id
        if workout.save
            flash[:msg] = "Workout added successfully"
            render json: workout
        else
            render json: {error: workout.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def index
        team = Team.find(params[:team_id]) 
        serialized_team = ActiveModelSerializers::SerializableResource.new(team, serializer: TeamWorkoutsSerializer).to_json
        render json: serialized_team
    end

    private

    def workout_params
        params.require(:workout).permit(:title, :description, :duration, :workout_type) 
    end
end