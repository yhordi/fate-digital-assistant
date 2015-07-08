class AddProfileInfoToUsers < ActiveRecord::Migration
  def change
    add_column :users, :picture, :string, default: "no-image.png"
    add_column :users, :bio, :text
    add_column :users, :birthday, :date
  end
end
