class CreateConsequences < ActiveRecord::Migration
  def change
    create_table :consequences do |t|
      t.string :name
      t.string :severity
      t.integer :shift_value
      t.belongs_to :npc
      t.timestamps null: false
    end
  end
end
