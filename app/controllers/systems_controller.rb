class SystemsController < ApplicationController
  include AuthenticationConcern
  def new
    @system = System.new
    render partial: 'new'
  end

  def create
    @system = System.new
    @system.user_id = session[:id]
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
    @user = User.find(@system.user_id)
    render partial: 'show'
  end

  def index
    @user = current_user
    @systems = System.order(created_at: :desc)
  end

  def edit
    @system = System.find(params[:id])
    render partial: 'edit'
  end

  def update
    @system = System.find(params[:id])
    @system.update_attributes(system_params)
    render json: @system
  end

  def destroy
    system = System.find(params[:id])
    system.delete
    render html: "System deleted"
  end

  private

  def system_params
    params.require(:system).permit(:name, :description, :public)
  end
end