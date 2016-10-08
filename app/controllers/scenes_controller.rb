class ScenesController < ApplicationController
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
