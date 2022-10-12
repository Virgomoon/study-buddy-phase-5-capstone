class UsernotesController < ApplicationController

    def index
        note = @current_user.notes
        render json: note
    end
end
