Rails.application.routes.draw do
  resources :buddies
  resources :notes
  resources :subjects, only: [:index]
  resources :users

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
