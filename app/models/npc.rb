class Npc < ActiveRecord::Base
  validates :name, :npc_type, presence: true
  validates :max_physical_stress, :max_mental_stress, inclusion: 1..5
  belongs_to :system
  has_many :character_skills, dependent: :destroy
  has_many :stunts, dependent: :destroy
  has_many :aspects, as: :aspectable
end
