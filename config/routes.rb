Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :teams, only: [:index, :show, :create]
      resources :teams, only: [ :show] do
        resources :workouts, only: [:index]
      end
      resources :workouts, only: [:create]
      resources :users, only: [:show]
      resources :feedback, only: [:show, :create, :index]
    end
  end

  get "/users/sign_out", to: "homes#index"
  get "/teams", to: "teams#index"
  get "/teams/new", to: "teams#new"
  get "/teams/:id", to: "teams#show"
  get "/workouts/new", to: "workouts#new"
  get "/teams/:id/workouts", to: "workouts#index"
  get "/users/:id", to: "users#show"
  get "teams/:id/feedback", to: "feedback#index"

end
