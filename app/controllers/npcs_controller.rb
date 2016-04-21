class NpcsController < ApplicationController
  def index
    npcs = Npc.where("system_id = #{params[:system_id]}")
    render json: npcs
  end

  def destroy
    npc = Npc.find(params[:id])
    npc.destroy
    render json: Npc.all
  end
end
