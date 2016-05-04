class Api::HappeningsController < ApplicationController
  def index
    @happenings = []
    if(bounds)
      happenings = Happening.in_bounds(bounds)
    end

    if (params[:filters])
      filtered_happenings = Happening.has_tag(params[:filters])

      happenings.each do |happening|
        if filtered_happenings.include?(happening)
          @happenings.push(happening)
        end
      end

    else
      @happenings = happenings
    end


    render 'index'
  end

  def show
    @happening = Happening.find(params[:id])
    render 'show'
  end

  def create
    @happening = Happening.new(happening_params)
    @happening.user_id = current_user.id
    @happening.date = Time.new
    if @happening.save
      Image.create({ happening_id: @happening.id, image_url: params[:happening][:image] })
      params[:happening][:tags].each do |tagId|
        Tagging.create({ happening_id: @happening.id, tag_id: tagId.to_i})
      end
    end
    render 'show'
  end

  private
  def happening_params
    params.require(:happening).permit(
      :lat,
      :lng,
      :title,
      :body,
      :date,
      :tags
    )
  end

  def bounds
    params[:bounds]
  end
end
