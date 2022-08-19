class TeamFeedbackSerializer < ActiveModel::Serializer
    attributes :id, :name, :description

    has_many :feedback
end