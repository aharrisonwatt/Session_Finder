class HappeningsController < ApplicationController
  def create
    @happening = Happening.new(happening_params)
    if @happening.save
      render "api/happening/show"
    else
      @errors = @happening.errors.full_messages
      render "api/shared/error", status: 422
    end
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
