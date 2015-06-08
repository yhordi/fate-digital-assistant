class SystemsController < ApplicationController
  def new
    @system = System.new
    render partial: 'new'
  end

  def create
    @system = System.new
    @system.name = params[:system][:name]
    @system.description = params[:system][:description]
    if @system.save
      render json: System.last
    else
      render json: @system.errors.full_messages
    end
  end

  def show
    @system = System.find(params[:id])
    render partial: 'show'
  end

  def index
    @systems = System.all
  end
end