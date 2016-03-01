class RemoveGameMasterIdFromUser < ActiveRecord::Migration
  def change
    remove_column :users, :game_master_id
  end
end
