class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name
      t.text :description
      t.belongs_to :system
      t.references :parent_location
      t.timestamps
    end
  end
end
