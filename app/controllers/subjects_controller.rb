class SubjectsController < ApplicationController

    def index
        subjects = @current_user.subjects
        render json: subjects.uniq
    end
    # def index
    #     subjects = Subject.all
    #     render json: subjects, each_serializer: SubjectSerializer
    # end
end
