Rails.application.routes.draw do
  get 'shops/index'

  get 'shops/new'

  get 'shops/show'

  get 'shops/edit'

  resources :users
  get '/login' => 'session#new', :as => 'login'
  post '/login' => 'session#create'
  delete '/logout' => 'session#destroy', :as => 'logout'


end
