class AddProfileInfoToUsers < ActiveRecord::Migration
  def change
    add_column :users, :picture, :string
    add_column :users, :bio, :text
    add_column :users, :birthday, :date
  end
end
