class SubjectsController < ApplicationController
    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    skip_before_action :authorize, only: [:index]


    def index
        subjects = Subject.all
        render json: subjects, each_serializer: SubjectSerializer
    end

    def show
        subjects = @current_user.subjects
        render json: subjects.uniq
    end

    def create
        subject = Subject.create(title: params[:title])
        render json: subject
    end

    def destroy
        subject = Subject.find(params[:id])
        subject.destroy
        head :no_content
    end
end
