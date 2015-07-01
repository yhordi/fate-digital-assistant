class CreateAspects < ActiveRecord::Migration
  def change
    create_table :aspects do |t|
      t.string :name
      t.references :aspectable, polymorphic: true, index: true
      t.timestamps
    end
  end
end
