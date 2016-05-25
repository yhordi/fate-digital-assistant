class StuntsController < ApplicationController
  def create
    stunt = Stunt.new(stunt_params)
    npc_id = params[:npc_id].to_i
    stunt.npc_id = npc_id
    stunt.save!
    render json: stunt
  end

  private

  def stunt_params
    params.require(:stunt).permit(:name, :description, :npc_id)
  end

end
