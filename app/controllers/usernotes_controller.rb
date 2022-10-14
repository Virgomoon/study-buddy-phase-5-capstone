class UsernotesController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        note = @current_user.notes
        render json: note
    end
end
