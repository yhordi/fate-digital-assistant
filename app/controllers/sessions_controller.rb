class SessionsController < ApplicationController
  include AuthenticationConcern
  protect_from_forgery with: :exception

  def create
    user = User.find_by(name: params[:name])
    if user && user.authenticate(params[:password])
      login(user)
      redirect_to user_path(user.id)
    else
      redirect_to root_path, :flash => { :error => "Incorrect user name or password. Please try again." }
    end
  end

  def new
    @user = current_user
  end

  def show
  end

  def destroy
    session[:id] = nil
    redirect_to root_path
  end

end