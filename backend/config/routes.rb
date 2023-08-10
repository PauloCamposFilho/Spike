Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    resources :players do
      member do
        get 'matches', to: 'players#player_matches'
        get 'teams', to: 'players#player_teams'
        get 'playarea/favorite', to: 'players#player_playarea_favorite'
      end
    end

    resources :teams do
      member do
        get 'matches', to: 'teams#team_matches'
        get 'players/current', to: 'teams#players_current'
        get 'players/history', to: 'teams#players_history'
      end
    end

    resources :play_areas do
      member do
        get 'matches', to: 'play_areas#matches_history'
      end
    end

    resources :matches do
      member do
        get 'teams', to: 'matches#teams'
        get 'playarea', to: 'matches#playarea'
      end
    end

    get 'my-profile', to: 'players#my_profile'
    get 'login(/:user_id)', to: 'sessions#login'
    get 'logout', to: 'sessions#logout'
    get 'testlogin', to: 'sessions#testlogin'
  end
end
