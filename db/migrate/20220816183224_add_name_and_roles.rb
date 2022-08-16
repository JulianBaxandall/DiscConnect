class AddNameAndRoles < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :name, :string

    add_column :registrations, :role, :string, default:"member"
  end
end
