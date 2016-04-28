class NpcsController < ApplicationController
  def destroy
    npc = Npc.find(params[:id])
    npc.destroy
    render json: Npc.all
  end

  def index
    npcs = Npc.where("system_id = #{params[:system_id]}")
    render json: npcs
  end

end
