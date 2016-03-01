class CreateAspects < ActiveRecord::Migration
  def change
    create_table :aspects do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :context, null: false
      t.timestamps
    end
  end
end
