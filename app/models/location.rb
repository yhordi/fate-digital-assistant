class Location < ActiveRecord::Base
  belongs_to :system
  validates :name, presence: true
  validates :description, presence: true
  has_many :aspects, :as => :aspectable
  belongs_to :parent_location, class_name: "Location"
  # foreign_key: "location_id"
end