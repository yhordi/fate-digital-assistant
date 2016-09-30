class CreateCharacterSkills < ActiveRecord::Migration
  def change
    create_table :character_skills do |t|
      t.string :name
      t.integer :level
      t.references :npc
      t.timestamps null: false
    end
  end
end
