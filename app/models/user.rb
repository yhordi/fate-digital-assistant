class User < ActiveRecord::Base
  has_secure_password
  validates :name, uniqueness: true, presence: true
  has_many :systems, dependent: :destroy
  has_many :adventures, foreign_key: 'game_master_id'
  has_attached_file :avatar,
  default_url: "no-image.png",
  styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>'
  }

  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
end
