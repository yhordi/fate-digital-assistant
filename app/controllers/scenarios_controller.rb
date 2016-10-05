class ScenariosController < ApplicationController
  def index
    scenarios = Scenario.where(system_id: params["system_id"])
    render json: scenarios
  end

  def create
    scenario = Scenario.new(scenario_params)
    scenario.system_id = params[:system_id]
    if scenario.save
      render json: { scenarios: Scenario.where(system_id: params[:system_id]) }
    else
      render json: { errors: scenario.errors.full_messages }
    end
  end

  def update
    scenario = Scenario.find(params[:id])
    if scenario.update_attributes(scenario_params)
      render json: Scenario.where(system_id: params[:system_id])
    else
      render json: { errors: scenario.errors.full_messages }
    end
  end

  def destroy
    scenario = Scenario.find(params[:id])
    scenario.delete
    render json: Scenario.where(system_id: params[:system_id])
  end

  private

  def scenario_params
    params.require(:scenario).permit(:name, :description, :system_id)
  end
end
