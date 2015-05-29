class UsersController < ApplicationController
  include AuthenticationConcern

  def create
    @user = User.new
  end

  def new
    @user = User.new
  end

  def show
    @user = User.find(session[:id])  
  end
end