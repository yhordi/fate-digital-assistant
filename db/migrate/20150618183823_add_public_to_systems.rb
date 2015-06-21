class AddPublicToSystems < ActiveRecord::Migration
  def change
    add_column :systems, :public, :boolean, default: false
  end
end
