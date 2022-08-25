class CreateInvites < ActiveRecord::Migration[5.2]
  def change
    create_table :invites do |t|
      t.string :role, null:false, default: "member"
      t.string :message

      t.belongs_to :user, null:false
      t.belongs_to :team, null:false
    end
  end
end
