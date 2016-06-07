class StuntsController < ApplicationController
  def create
    stunt = Stunt.new(stunt_params)
    npc_id = params[:npc_id].to_i
    stunt.npc_id = npc_id
    stunt.save!
    render json: stunt
  end

  def destroy
    p params
    stunt = Stunt.find(params[:id])
    stunt.delete
    npc = Npc.find(params[:npc_id])
    render json: {stunts: npc.stunts}
  end

  private

  def stunt_params
    params.require(:stunt).permit(:name, :description, :npc_id)
  end

end
