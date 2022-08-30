class Api::V1::TeamsController < ApplicationController
    
    protect_from_forgery unless: -> { request.format.json?}
    before_action :authenticate_user!, except: [:index, :show]

    def index
        user = User.find(current_user.id)
        serialized_user = ActiveModelSerializers::SerializableResource.new(user, serializer: MyTeamsSerializer).to_json
        render json: serialized_user
    end

    def show
        team = Team.find(params[:id])
        current_role = Registration.find_by(user_id: current_user.id, team_id: params[:id])
        serialized_team = ActiveModelSerializers::SerializableResource.new(team, serializer: TeamShowSerializer)
        render json: {team: serialized_team, user:current_role}.to_json
    end

    def create
        team = Team.create(team_params)
        if team.save
            flash[:msg] = "Team added successfully"
            Registration.create(user_id: current_user.id, team_id: team.id, role: "captain")
            render json: team
        else
            render json: {error: team.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def search
        teams = Team.where("name ILIKE ?", "%#{params['search_string']}%")
        render json: teams
    end

    def captaincy
        captaincies = Registration.where(role: "captain", user_id: current_user.id)
        teams = []
        captaincies.each do |reg|
            teams.push(Team.find(reg.team_id))
        end
        render json: teams.to_json
    end

    private

    def team_params
        params.require(:team).permit(:name, :description, :division, :current_role)    
    end
end