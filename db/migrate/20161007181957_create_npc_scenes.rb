class CreateNpcScenes < ActiveRecord::Migration
  def change
    create_table :npc_scenes do |t|
      t.belongs_to :npc, index: true
      t.belongs_to :scene, index: true
      t.timestamps null: false
    end
  end
end
