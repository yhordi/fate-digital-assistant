class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name
      t.text :description
      t.belongs_to :system
      t.timestamps
    end
  end
end
