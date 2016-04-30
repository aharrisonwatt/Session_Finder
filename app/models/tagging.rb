class Tagging < ActiveRecord::Base
  validates :happening_id, :tag_id, presence: true

  belongs_to :happening
  belongss_to :tag
end
