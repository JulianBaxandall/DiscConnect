Rails.application.routes.draw do

  root 'homes#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :invites, only: [:index, :create]
      resources :registrations, only: [:create]
      resources :teams, only: [:index, :show, :create]
      resources :teams, only: [ :show] do
        resources :tasks, only: [:index, :create]
        resources :workouts, only: [:index]
        resources :feedback, only: [:show, :create, :index]
      end
      resources :feedback, only: [:show, :index]
      resources :workouts, only: [:create]
      resources :users, only: [:show, :search]
      post 'feedback/update', to: 'feedback#update'  
      post 'users/search', to: 'users#search'
      post 'teams/search', to: 'teams#search'
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
  get "teams/:id/tasks", to: "tasks#index"
  get '/search', to: 'users#search'
  get "teams/:id/tasksnew", to: "tasks#new"
end
