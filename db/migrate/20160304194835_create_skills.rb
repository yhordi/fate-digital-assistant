class CreateSkills < ActiveRecord::Migration
  def change
    create_table :skills do |t|
      t.string :name, null: false
      t.integer :level, null: false, default: 0
      t.text :description
      t.timestamps null: false
    end
  end
end
