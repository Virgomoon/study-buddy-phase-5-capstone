class BuddiesController < ApplicationController

    def index
        buddies = @current_user.users
        render json: buddies
    end
end
