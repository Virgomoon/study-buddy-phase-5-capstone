class UsernotesController < ApplicationController

    def show
        buddy = @current_user.buddies.find(params[:id])
        # see_buddy = buddy_notes buddy
        render json: buddy.buddy.notes.to_json(except: [:users])
    end
end
