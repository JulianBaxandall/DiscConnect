Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :teams, only: [:index, :show]
    end
  end

  get "/teams", to: "teams#index"
  get "/teams/:id", to: "teams#show"
end
