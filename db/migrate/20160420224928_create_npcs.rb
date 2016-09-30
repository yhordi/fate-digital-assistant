class CreateNpcs < ActiveRecord::Migration
  def change
    create_table :npcs do |t|
      t.string :name
      t.string :npc_type
      t.text :background
      t.belongs_to :system
      t.timestamps null: false
    end
  end
end
