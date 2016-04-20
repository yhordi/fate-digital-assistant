Rails.application.routes.draw do
  resources :users, except: :index
  resources :sessions, only: [:create, :destroy, :show]
  resources :systems do
    resources :skills
    resources :npcs
  end
  root 'users#new'
end
