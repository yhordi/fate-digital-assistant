class Aspect < ActiveRecord::Base
  belongs_to :aspectable, polymorphic: true
  validates :name, :description, presence: true
end
