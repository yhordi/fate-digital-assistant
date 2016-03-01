class Adventure < ActiveRecord::Base
  belongs_to :game_master, class_name: "User"
end
