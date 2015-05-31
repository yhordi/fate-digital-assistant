class User < ActiveRecord::Base
  has_secure_password
  validates :name, uniqueness: true, presence: true
  has_many :systems
end
