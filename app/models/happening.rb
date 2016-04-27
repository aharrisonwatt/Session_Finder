class Happening < ActiveRecord::Base
  validates :user_id, :date, :lat, :lng, :title, :body, presence: true
end
