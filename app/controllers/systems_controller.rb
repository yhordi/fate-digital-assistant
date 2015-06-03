class SystemsController < ApplicationController
  def new
    @system = System.new
    render partial: 'new'
  end

  def show
    @system = System.find(params[:id])
    @system.to_json
  end

  def index #get '/'
    @systems = System.all
  end
end