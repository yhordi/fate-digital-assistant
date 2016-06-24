class NpcsController < ApplicationController
  def create
    npc = Npc.new(npc_params)
    npc.system_id = params["npc"]["systemId"]
    npc.save!
    render json: npc, include: [:character_skills, :stunts, :aspects]
  end

  def destroy
    npc = Npc.find(params[:id])
    npc.destroy
    render json: Npc.all, include: :character_skills
  end

  def index
    npcs = Npc.where("system_id = #{params[:system_id]}").includes([:character_skills, :stunts, :aspects])
    render json: npcs, include: [:character_skills, :stunts, :aspects]
  end

  def update
    npc = Npc.find(params[:id])
    npc.update_attributes(npc_params)
    render json: npc, include: [:character_skills, :stunts]
  end

  private

  def npc_params
    params.require(:npc).permit(:name, :background, :npc_type, :system_id, :id)
  end
end
