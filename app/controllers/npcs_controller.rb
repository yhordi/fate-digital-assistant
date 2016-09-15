class NpcsController < ApplicationController
  def create
    npc = Npc.new(npc_params)
    npc.system_id = params["npc"]["system_id"]
    npc.save!
    render json: npc, include: [:character_skills, :stunts, :aspects, :consequences]
  end

  def destroy
    npc = Npc.find(params[:id])
    npc.destroy
    render json: Npc.where(system_id: params["system_id"]), include: [:character_skills, :stunts, :aspects, :consequences]
  end

  def index
    npcs = Npc.where("system_id = #{params[:system_id]}").includes([:character_skills, :stunts, :aspects])
    render json: npcs, include: [:character_skills, :stunts, :aspects, :consequences]
  end

  def update
    npc = Npc.find(params[:id])
    npc.update_attributes(npc_params)
    render json: npc, include: [:character_skills, :stunts, :aspects, :consequences]
  end

  private

  def npc_params
    params.require(:npc).permit(:name, :background, :npc_type, :system_id, :id, :physical_stress, :mental_stress)
  end
end
