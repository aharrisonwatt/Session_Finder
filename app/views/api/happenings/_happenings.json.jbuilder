json.extract!(
  happening,
  :user_id, :lat, :lng, :body, :title, :date, :id
)

json.image happening.images
json.tags happening.tags
