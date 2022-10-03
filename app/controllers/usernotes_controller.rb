class UsernotesController < ApplicationController

    def show
        buddy = @current_user.users.find(params[:id])
        render json: buddy.notes
    end
end
