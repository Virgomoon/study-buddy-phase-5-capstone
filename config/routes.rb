Rails.application.routes.draw do
  resources :buddies
  resources :notes
  resources :subjects, only: [:index]
  resources :users, only: [:index, :create, :update, :destroy]

  get "/sessions", to: "sessions#index"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"



  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
