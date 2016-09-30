class CreateScenarios < ActiveRecord::Migration
  def change
    create_table :scenarios do |t|
      t.string :name
      t.text :description
      t.belongs_to :system
      t.timestamps null: false
    end
  end
end
