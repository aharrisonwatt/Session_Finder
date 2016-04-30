class Image < ActiveRecord::Base
  validates :happening_id, :image_url, presence: true

  belong_to :happening
end
