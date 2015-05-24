Rails.application.routes.draw do
  resources :users, except: :index
  resources :sessions, only: [:create, :destroy, :show]
  root 'sessions#new'
end
