class BuddiesController < ApplicationController

    def index
        buddies = Buddy.all
        render json: buddies
    end
end
