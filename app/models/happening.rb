class Happening < ActiveRecord::Base
  validates :user_id, :date, :lat, :lng, :title, :body, presence: true

  has_many :images
  has_many :taggings
  has_many :tags, through: :taggings

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end

end
