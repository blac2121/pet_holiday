Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :households do
    resources :pets, except: [:index]
    resources :contacts, except: [:index]
  end
end
