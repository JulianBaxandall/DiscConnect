class Api::V1::TeamsController < ApplicationController
    def index
        render json: Team.all
    end

    def show
        team = Team.find(params[:id])
        serialized_team = ActiveModelSerializers::SerializableResource.new(team, serializer: TeamShowSerializer).to_json
        render json: serialized_team
    end
end