class CreateTasksResolved < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :resolved, :boolean, default:false, null:false
  end
end
