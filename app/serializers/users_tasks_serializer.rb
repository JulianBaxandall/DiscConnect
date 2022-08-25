class UsersTasksSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :tasks

    has_many :tasks
    has_many :registrations
end