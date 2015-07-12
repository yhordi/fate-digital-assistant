Rails.application.routes.draw do
  resources :users, except: :index
  resources :sessions, only: [:create, :destroy, :show]
  resources :systems
  resources :locations, except: [:index, ]
  root 'users#new'
end
