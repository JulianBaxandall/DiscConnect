class UserShowSerializer < ActiveModel::Serializer
    attributes :id, :name, :email

    has_many :teams
end