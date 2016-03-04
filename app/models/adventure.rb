class Adventure < ActiveRecord::Base
  validates :title, presence: true
  belongs_to :game_master, class_name: "User"
end
