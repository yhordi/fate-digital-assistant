class Aspect < ActiveRecord::Base
  validates :name, presence: true
  validates :description, presence: true
  validates :context, presence: true
end
