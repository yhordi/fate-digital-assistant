class SystemsController < ApplicationController
  def new
    @system = System.new
  end

  def index
    @systems = System.all
    render json: @systems
  end
end