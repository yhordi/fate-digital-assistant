class Aspect < ActiveRecord::Base
  belongs_to :aspectable, polymorphic: true
  validates :name, :description, :aspectable_id, :aspectable_type, presence: true
end
