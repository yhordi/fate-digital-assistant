class CreateNpcSkills < ActiveRecord::Migration
  def change
    create_table :npc_skills do |t|
      t.belongs_to :npc
      t.belongs_to :skill
      t.timestamps null: false
    end
  end
end
