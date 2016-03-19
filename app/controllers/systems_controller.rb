class SystemsController < ApplicationController
  include AuthenticationConcern

  def new
    @settings = SettingsHelper.settings
    @system = System.new
    @user = current_user
    render partial: 'system_form'
  end

  def create
    @system = System.new
    @system.user_id = session[:id]
    @system.name = params[:name]
    @system.description = params[:description]
    @system.setting = params[:setting]
    if @system.save
      render json: System.last
    else
      render json: @system.errors.full_messages
    end
  end

  def show
    @system = System.find(params[:id])
    @user = User.find(@system.user_id)
  end

  def index
    @user = current_user
    @systems = System.order(created_at: :desc).where(user_id: @user)
    respond_to do |format|
      format.html
      format.json { render :json => @systems.to_json}
    end
  end

  def edit
    @settings = SettingsHelper.settings
    @system = System.find(params[:id])
    render json: @system
  end

  def update
    @system = System.find(params[:id])
    @system.update_attributes(system_params)
    render json: @system
  end

  def destroy
    system = System.find(params[:id])
    system.delete
    render json: System.all
  end

  private

  def system_params
    params.require(:system).permit(:name, :description, :public, :setting)
  end
end
