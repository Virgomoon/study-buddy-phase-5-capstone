Rails.application.routes.draw do
  # namespace :api do
    resources :buddies
    resources :notes
    resources :subjects, only: [:index, :show, :create, :destroy]
    resources :users, only: [:index, :update, :destroy]
    resources :user_notes
    # get "/sessions", to: "sessions#index"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    
    get "/mynotes", to: "usernotes#index"
    get "/mybuddynotes/:id", to: "buddynotes#show"
  # end



  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
