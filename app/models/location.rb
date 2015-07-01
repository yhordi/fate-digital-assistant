class Location < ActiveRecord::Base
  belongs_to :system
  validates :name, presence: true
  validates :description, presence: true
  has_many :aspects, :as => :aspectable
end