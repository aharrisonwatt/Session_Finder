Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :tags, only: [:index]
    resources :happenings, only: [:index, :create, :show]
  end
end
