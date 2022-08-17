class Api::V1::TeamsController < ApplicationController
    
    protect_from_forgery unless: -> { request.format.json?}
    before_action :authenticate_user!, except: [:index, :show]

    def index
        render json: Team.all
    end

    def show
        team = Team.find(params[:id])
        serialized_team = ActiveModelSerializers::SerializableResource.new(team, serializer: TeamShowSerializer).to_json
        render json: serialized_team
    end

    def create
        team = Team.create(team_params)
        if team.save
            flash[:msg] = "Team added successfully"
            render json: team
        else
            render json: {error: team.errors.full_messages}, status: :unprocessable_entity
        end
    end


    private

    def team_params
        params.require(:team).permit(:name, :description, :division)    
    end
end