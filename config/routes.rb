Rails.application.routes.draw do
  resources :users, except: :index
  resources :sessions, only: [:create, :destroy, :show]
  resources :systems do
    resources :skills
    resources :npcs
  end
  resources :npcs, shallow: true do
    resources :character_skills
  end
  root 'users#new'
end
