class SystemsController < ApplicationController
  include AuthenticationConcern

  def create
    @system = System.new(name: params[:system][:name], description: params[:system][:description])
    @system.user_id = current_user.id
    @system.save
    @system.seed_defaults(@system.id)
    if System.last == @system
      render json: System.last
    else
      render json: { error: { errors: @system.errors.full_messages }}, status: 422
    end
  end

  def show
    @system = System.find(params[:id])
    render json: @system
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
    @system.default_skills(params)
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
