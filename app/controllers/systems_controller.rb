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
    @systems = System.order(created_at: :desc)
  end

  def edit
    @system = System.find(params[:id])
    render partial: 'edit'
  end

  def update
    @system = System.find(params[:id])
    if @system.update_attributes(system_params)
      p flash[:notice] = "System updated successfully"
      render json: @system
    end
  end

  private

  def system_params
    params.require(:system).permit(:name, :description)
  end
end