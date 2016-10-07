class Scene < ActiveRecord::Base
  validates :name, :description, presence: true
  validates :name, uniqueness: true
  belongs_to :scenario
  has_many :aspects, as: :aspectable
  has_many :npc_scenes
  has_many :npcs, through: :npc_scenes
end
