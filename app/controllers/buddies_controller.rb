class BuddiesController < ApplicationController

    def index
        buddies = Buddy.all
        render json: buddies
    end
    
    def show
        buddies = @current_user.buddies.all
        render json: buddies
    end
    def create
        buddy = Buddy.create(add_buddy_params)
        render json: buddy, status: :created
    end

    def destroy
        buddy = Buddy.find(params[:id])
        buddy.destroy
        head :no_content
    end

    private

    def add_buddy_params
        params.permit(:user_id, :buddy_id)
    end
end
