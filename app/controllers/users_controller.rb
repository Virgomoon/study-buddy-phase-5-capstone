class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize, only: [:create]

    def index
        users = @current_user.potential_buddies
        filter = users.select{ | user | user[:id] != @current_user.id}
        render json: filter
    end

    def show
      render json: @current_user
    end
    
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end

    def update
        user = @current_user.update(user_params)
        render json: user
    end

    def destroy
        @current_user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :email, :username, :password)
    end

    # def find_user
    #     User.find(params[:id])
    # end

    # def render_not_found_response
    #     render json: { error: "User not found" }, status: :not_found
    # end

    
end
