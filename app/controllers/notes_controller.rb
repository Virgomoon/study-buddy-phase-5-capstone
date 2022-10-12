class NotesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        notes = Note.all
        render json: notes
    end

    def show
        note = find_note
        render json: note
    end

    def create
        note = Note.create(note_params)
        render json: note, status: :created
    end

    def update
        note = find_note
        note.update(note_params)
        render json: note
    end

    def destroy
        note = find_note
        note.destroy
        head :no_content
    end

    private

    def note_params
        params.permit(:subject_id, :user_id, :title, :entry, :ref_links, :vid_url)
    end

    # def find_user
    #     User.find_by(id: params[:id])
    # end

    def find_note
        Note.find_by(id: params[:id])
    end

    # def find_note
    #     @current_user.notes.find(params[:id])
    # end

    def render_not_found_response
        render json: { error: "Note not found" }, status: :not_found
    end
end
