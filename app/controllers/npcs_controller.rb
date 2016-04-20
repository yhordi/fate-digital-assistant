class NpcsController < ApplicationController
  def index
    @npcs = Npc.where("system_id = #{params[:system_id]}")
    render json: @npcs
  end
end
