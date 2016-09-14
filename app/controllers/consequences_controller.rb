class ConsequencesController < ApplicationController
  def create
    consequence = Consequence.new(consequence_params)
    if consequence.save!
      npc = Npc.find(params[:npc_id])
      render json: {consequences: npc.consequences}
    end
  end

  def destroy
    consequence = Consequence.find(params[:id])
    consequence.delete
    npc = Npc.find(params[:npc_id])
    render json: {consequences: npc.consequences}
  end

  def update
    p params
    consequence = Consequence.find(params[:id])
    consequence.update_attributes(consequence_params)
    p consequence
    npc = Npc.find(params[:npc_id])
    render json: {consequences: npc.consequences}
  end

  private

  def consequence_params
    params.require(:consequence).permit(:name, :severity, :npc_id, :shift_value)
  end
end
