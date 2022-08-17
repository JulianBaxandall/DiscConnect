class Workout < ApplicationRecord
    validates :title, presence:true
    validates :workout_type, presence:true
    validates :duration, presence:true

    belongs_to :user
end