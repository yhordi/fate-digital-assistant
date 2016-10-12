class ScenesController < ApplicationController

  def index
    scenes = Scene.where(scenario_id: params[:scenario_id])
    render json: scenes, :include => {:npcs => {include: [:aspects, :character_skills, :stunts, :consequences]}}
  end

  def update
    p params
    scene = Scene.find(params[:id])
    if params[:names]
      params[:names].each do |name|
        npc = Npc.find_by(name: name)
        scene.npcs << npc
      end
    end
    render json: scene.npcs
  end

end
