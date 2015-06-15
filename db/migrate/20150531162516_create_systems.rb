class CreateSystems < ActiveRecord::Migration
  def change
    create_table :systems do |t|
      t.string :name
      t.text :description
      t.belongs_to :user
      t.timestamps
    end
  end
end
