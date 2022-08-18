class Api::V1::UsersController < ApplicationController

    def show
        user = User.find(params[:id])
        serialized_user = ActiveModelSerializers::SerializableResource.new(user, serializer: UserShowSerializer).to_json
        render json: serialized_user
    end

end