class Tagging < ActiveRecord::Base
  validates :happening_id, :tag_id, presence: true

  belongs_to :happening
  belongs_to :tag
end
