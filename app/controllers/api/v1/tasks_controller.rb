class Api::V1::TasksController < ApplicationController
    protect_from_forgery unless: -> { request.format.json?}

    def index
        # binding.pry
        user = User.find(current_user.id)
        tasks = Task.where(user_id: user.id, team_id:params[:team_id]).to_json
        render json: tasks
    end
end