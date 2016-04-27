json.array!(@happenings) do |happening|
  json.partial!('happenings', happening: happening)
end
