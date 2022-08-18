class Api::V1::FeedbackController < ApplicationController
    def index
        team = Team.find(params[:id])
        serialized_team = ActiveModelSerializers::SerializableResource.new(team, serializer: TeamFeedbackSerializer).to_json
        render json: serialized_team
    end
end