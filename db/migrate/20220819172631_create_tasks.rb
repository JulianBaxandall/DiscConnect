class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title, null:false
      t.string :body, null:false
      t.string :urgency
      
      t.belongs_to :user, null:false
      t.belongs_to :team, null:false
    end
  end
end
