class UsersController < ApplicationController
  include AuthenticationConcern
  include ErrorsHelper
  include AuthHelper
  def create
    user = User.new(name: params[:user][:name], password: params[:user][:password])
    if passwords_match? == true && user.valid? == true
      user.save
      flash[:notice] = "Account created. You may now log in."
      redirect_to root_path
    else
      flash[:error] = "Passwords don't match"
      redirect_to root_path
    end
  end

  def edit
    @user = User.find(params[:id])
    render :edit
  end

  def update
    user = User.find(params[:id])
    
    if validate_user(user)
      redirect_to user_path(user.id)
    else
      redirect_to edit_user_path(user.id)
    end
  end

  def new
    if session[:id] == nil
      @user = User.new
    else
      redirect_to user_path(session[:id])
    end
  end

  def show
    @user = User.find(session[:id])  
  end

  private

  def user_params
    params.require(:user).permit(:password, :bio)
  end

end