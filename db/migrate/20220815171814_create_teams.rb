class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :name, null:false
      t.string :description, null:false
      t.string :division

      t.timestamps null:false
    end
  end
end
