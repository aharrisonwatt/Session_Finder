class Api::HappeningsController < ApplicationController
  def index
    @happenings = Happening.all
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
      :game
    )
  end
end
