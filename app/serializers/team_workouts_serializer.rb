class TeamWorkoutsSerializer < ActiveModel::Serializer
    attributes :id, :name

    has_many :users, serializer: UserWorkoutsSerializer do
        object.users.order(:workouts.length).reverse
    end
end