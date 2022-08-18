class CreateFeedback < ActiveRecord::Migration[5.2]
  def change
    create_table :feedbacks do |t|
      t.string :title, null:false
      t.string :body, null:false
      t.string :category
      
      t.timestamps null:false
      t.belongs_to :team, null:false
    end
  end
end
