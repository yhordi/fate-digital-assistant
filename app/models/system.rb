class System < ActiveRecord::Base
  belongs_to :user
  has_many :locations
  validates :name, presence: true, uniqueness: true
  validates :description, presence: true, uniqueness: true
end
