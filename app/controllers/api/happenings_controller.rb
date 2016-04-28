class Api::HappeningsController < ApplicationController
  def index
    @happenings = Happening.all
    if(bounds)
      @happenings = Happening.in_bounds(bounds)
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
      :image
    )
  end

  def bounds
    params[:bounds]
  end
end
