class AddActionsToSkills < ActiveRecord::Migration
  def up
    add_column :skills, :overcome, :text
    add_column :skills, :advantage, :text
    add_column :skills, :attack, :text
    add_column :skills, :defend, :text
    add_column :skills, :default_set, :boolean
    add_column :skills, :special, :text
  end

  def down
    remove_column :skills, :overcome, :text
    remove_column :skills, :advantage, :text
    remove_column :skills, :attack, :text
    remove_column :skills, :defend, :text
    remove_column :skills, :default_set, :boolean
    remove_column :skills, :special, :text
  end
end
