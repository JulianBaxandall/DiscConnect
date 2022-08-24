class AddResolvedColumnTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :feedbacks, :resolved, :boolean, default:false, null:false
  end
end
