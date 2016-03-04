class CreateAdventures < ActiveRecord::Migration
  def change
    create_table :adventures do |t|
      t.string :title, null: false
      t.text :description
      t.text :notes
      t.references :game_master, index: true
      t.timestamps
    end
  add_foreign_key :adventures, :users, column: :game_master_id
  end
end
