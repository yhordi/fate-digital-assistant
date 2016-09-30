class CreateStunts < ActiveRecord::Migration
  def change
    create_table :stunts do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.belongs_to :npc
      t.timestamps null: false
    end
  end
end
