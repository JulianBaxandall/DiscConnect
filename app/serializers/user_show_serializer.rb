class UserShowSerializer < ActiveModel::Serializer
    attributes :id, :name, :email

    has_many :teams
    has_many :workouts
end