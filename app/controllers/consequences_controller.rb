class ConsequencesController < ApplicationController
  def create
    consequence = Consequence.new(consequence_params)
    if consequence.save!
      render json: consequence
    end
  end

  private

  def consequence_params
    params.require(:consequence).permit(:name, :severity, :npc_id, :shift_value)
  end
end
