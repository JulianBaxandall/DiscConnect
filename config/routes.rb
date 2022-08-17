Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :teams, only: [:index, :show, :create]
      resources :workouts, only: [:create]
    end
  end

  get "/users/sign_out", to: "homes#index"
  get "/teams", to: "teams#index"
  get "/teams/new", to: "teams#new"
  get "/teams/:id", to: "teams#show"
  get "/workouts/new", to: "workouts#new"

end
