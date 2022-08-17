class TeamWorkoutsSerializer < ActiveModel::Serializer
    attributes :id, :name

    has_many :users, serializer: UserWorkoutsSerializer
end