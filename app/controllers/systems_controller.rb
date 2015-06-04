class SystemsController < ApplicationController
  def new
    @system = System.new
    render partial: 'new'
  end

  def create
    p "*"*100
    p params
    system = System.new
    system.name = params[:system][:name]
    system.description = params[:system][:description]
    if system.save!
      render json: System.last
    else
      flash[:errors] = "System info invalidd"
    end
  end

  def show
    @system = System.find(params[:id])
    @system.to_json
  end

  def index #get '/'
    @systems = System.all
  end
end