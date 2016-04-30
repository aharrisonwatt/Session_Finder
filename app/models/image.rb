class Image < ActiveRecord::Base
  validates :happening_id, :image_url, presence: true

  belongs_to :happening
end
