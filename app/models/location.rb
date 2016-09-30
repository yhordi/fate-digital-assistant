class Location < ActiveRecord::Base
  validates :name, :description, presence: true
  belongs_to :scene
end
