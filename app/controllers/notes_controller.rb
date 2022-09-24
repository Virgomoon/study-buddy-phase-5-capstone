class NotesController < ApplicationController
    
    def index
        notes = Note.all
        render json: notes
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user.notes
    end
end
