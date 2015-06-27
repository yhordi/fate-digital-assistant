class UsersController < ApplicationController
  include AuthenticationConcern

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
    p params
    render :edit
  end

  def update
    p params
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
end