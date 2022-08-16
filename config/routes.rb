Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :teams, only: [:index, :show, :create]
    end
  end

  get "/teams", to: "teams#index"
  get "/teams/new", to: "teams#new"
  get "/teams/:id", to: "teams#show"
end
