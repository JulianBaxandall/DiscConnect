class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.string :workout_type, null:false
      t.string :title, null:false
      t.string :description
      t.integer :duration, null:false

      t.belongs_to :user, null:false
    end
  end
end
