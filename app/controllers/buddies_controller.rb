class BuddiesController < ApplicationController
    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        buddies = Buddy.all.where(user_id: @current_user.id)
        render json: buddies
    end
    
    def show
        buddy = Buddy.find(params[:id])
        render json: buddy
    end

    def create
        # byebug
        buddy = Buddy.create(add_buddy_params)
        render json: buddy, status: :created
    end

    def destroy
        buddy = buddy_find
        buddy.destroy
        head :no_content
    end

    private

    def add_buddy_params
        params.permit(:user_id, :buddy_id, )
    end

    def buddy_find
        buddy = Buddy.find(params[:id])
    end
end
