class Location < ActiveRecord::Base
  belongs_to :system
  validates :name, presence: true
  validates :description, presence: true
end