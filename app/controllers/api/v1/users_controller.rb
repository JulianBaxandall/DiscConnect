class Api::V1::UsersController < ApplicationController
    protect_from_forgery unless: -> { request.format.json?}

    def show
        user = User.find(params[:id])
        serialized_user = ActiveModelSerializers::SerializableResource.new(user, serializer: UserShowSerializer)
        sameUser = (current_user.id === user.id)
        render json: {user: serialized_user, sameUser: sameUser}.to_json
    end

    def search
        users = User.where("name ILIKE ?", "%#{params['search_string']}%")
        render json: users
    end

end