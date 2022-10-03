class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

    # def index
    #     session[:user_id] 
    #     cookies[:user_id] 
    #     render json: { session: session[:user_id], cookies: cookies.to_hash }
    # end

    def create
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      end
    end
      

  def destroy
      session.delete :user_id
      head :no_content
  end


  # private

  # def user_params
  #   params.permit(:username, :password, :session )
  # end
      
end
