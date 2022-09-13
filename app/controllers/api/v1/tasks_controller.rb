class Api::V1::TasksController < ApplicationController
    protect_from_forgery unless: -> { request.format.json?}

    def index
        user = User.find(current_user.id)
        tasks = Task.where(user_id: user.id, team_id:params[:team_id], resolved:false)
        render json: tasks
    end

    def create
        user_id = params[:task][:user_id]
        team_id = params[:team_id]
        task = Task.create(task_params)
        task.user_id = user_id
        task.team_id = team_id
        if task.save
            flash[:msg] = "Task added successfully"
            render json: task
        else
            render json: {error: task.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update            
        task = Task.find(params[:task_id])
        if Task.update(params[:task_id], resolved: true)
            task = Task.find(params[:task_id])
            render json: task
        else
            render json: {error: task.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def task_params
        params.require(:task).permit(:title, :body, :urgency, :user_id, :team_id) 
    end
end