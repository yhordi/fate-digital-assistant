class AddStressToNpc < ActiveRecord::Migration
  def change
    add_column :npcs, :mental_stress, :integer, default: 2
    add_column :npcs, :physical_stress, :integer, default: 2
  end
end
