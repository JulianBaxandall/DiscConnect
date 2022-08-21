class UsersTasksSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :tasks

    has_many :tasks
end