class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        users = User.all 
        render json: users
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        user = User.create(user_params)
        render json: user, status: :created
    end

    def update
        user = find_user
        user.update(user_params)
        render json: user
    end

    def destroy
        user = find_user
        user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :email, :username, :password_digest)
    end

    def find_user
        User.find(params[:id])
    end

    def render_not_found_response
        render json: { error: "User not found" }, status: :not_found
    end
end
