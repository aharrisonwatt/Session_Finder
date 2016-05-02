require 'byebug'
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
    @happening = Happening.create!(happening_params)
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
      :user_id,
      :game,
      :image,
      :tags
    )
  end

  def bounds
    params[:bounds]
  end
end
