class AddMaxStressToNpcs < ActiveRecord::Migration
  def change
    add_column :npcs, :max_mental_stress, :integer, default: 2
    add_column :npcs, :max_physical_stress, :integer, default: 2
  end
end
