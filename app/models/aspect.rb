class Aspect < ActiveRecord::Base
  belongs_to :aspectable, polymorphic: true
end
