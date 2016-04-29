class NpcsController < ApplicationController
  def create
    npc = Npc.new(npc_params)
    npc.save!
    render json: npc
  end

  def destroy
    npc = Npc.find(params[:id])
    npc.destroy
    render json: Npc.all
  end

  def index
    npcs = Npc.where("system_id = #{params[:system_id]}")
    render json: npcs, include: :skills
  end

  def update
    npc = Npc.find(params[:id])
    npc.update_attributes(npc_params)
    render json: npc
  end

private

  def npc_params
    params.require(:npc).permit(:name, :background, :npc_type, :system_id, :id)
  end
end
