class HappeningsController < ApplicationController
  def index
    @happenings = Happening.all
    render 'index'
  end

  def show
    @happening = Happening.find(params[:id])
    render 'show'
  end

  def create
    happening = Happening.create!(happening_params)
    render 'show'
  end

  def update
  end

  def destroy
  end

  private
  def happening_params
    params.require(:user).permit(
      :lat,
      :lgn,
      :title,
      :body,
      :date,
      :user_id
    )
  end
end
