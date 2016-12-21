class ScenesController < ApplicationController

  def index
    scenes = Scene.where(scenario_id: params[:scenario_id])
    render json: scenes, :include => {:npcs => {include: [:aspects, :character_skills, :stunts, :consequences]}}
  end

  def update
    scene = Scene.find(params[:id])
    if params[:names]
      params[:names].each do |name|
        npc = Npc.find_by(name: name)
        scene.npcs << npc
      end
    end
    render json: scene.npcs
  end

  def create
    scene = Scene.new(scene_params)
    scene.scenario_id = params[:scenario_id]
    if scene.save!
      render json: Scene.last
    else
      render json: { errors: scene.errors.full_messages }
    end
  end

  private

  def scene_params
    params.require(:scene).permit(:name, :description, :scenario_id)
  end

end
