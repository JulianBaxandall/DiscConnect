class UserWorkoutsSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :workouts

    has_many :workouts
end