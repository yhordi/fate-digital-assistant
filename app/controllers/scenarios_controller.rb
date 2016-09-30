class ScenariosController < ApplicationController
  def index
    scenarios = Scenario.find_by(system_id: params["system_id"])
    render json: scenarios
  end
end
