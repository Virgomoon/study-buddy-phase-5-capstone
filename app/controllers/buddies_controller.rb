class BuddiesController < ApplicationController

    def index
        buddies = @current_user.buddies
        render json: buddies
    end
end
