class AddSettingsToSystems < ActiveRecord::Migration
  def change
    add_column :systems, :setting, :string, default: "no setting chosen"
  end
end
