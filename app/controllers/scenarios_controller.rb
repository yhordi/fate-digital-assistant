class ScenariosController < ApplicationController
  def index
    scenarios = Scenario.where(system_id: params["system_id"])
    render json: scenarios
  end
end
