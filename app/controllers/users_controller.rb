class UsersController < ApplicationController
  include AuthenticationConcern
  def new
    @user = User.new
  end

  def show
    @user = User.find(session[:id])  
  end
end