class CreateAspects < ActiveRecord::Migration
  def change
    create_table :aspects do |t|
      t.string :name
      t.text :description
      t.references :aspectable, polymorphic: true, index: true
      t.timestamps null: false
    end
  end
end
