class SystemsController < ApplicationController
  def new
    @system = System.new
  end

  def index #get '/'
    @systems = System.all
    render json: @systems
    #@systems.to_json
  end
end