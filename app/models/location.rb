class Location < ActiveRecord::Base
  belongs_to :system
  has_many :aspects, :as => :aspectable
  belongs_to :parent_location, class_name: "Location"
  validates :name, presence: true, uniqueness: true
  validates :description, presence: true
  validates :system_id, presence: true
end