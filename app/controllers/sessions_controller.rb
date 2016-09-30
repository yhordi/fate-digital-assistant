class SessionsController < ApplicationController
  include AuthenticationConcern
  protect_from_forgery with: :exception

  def create
    user = User.find_by(name: params[:name])
    if user && user.authenticate(params[:password])
      login(user)
      redirect_to user_path(user.id)
    else
      if user.nil?
        redirect_to root_path, :flash => { :error => "That username does not exist." }
      else
        redirect_to root_path, :flash => { :error => "That password is invaid." }
      end
    end
  end

  def show
    @user = current_user
    render partial: 'show'
  end

  def destroy
    logout
    redirect_to root_path
  end

end
