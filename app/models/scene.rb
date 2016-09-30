class Scene < ActiveRecord::Base
  validates :name, :description, presence: true
  validates :name, uniqueness: true
  has_many :locations
  has_many :npcs
  has_many :aspects, as: :aspectable
end
