class CharacterSkillsController < ApplicationController
  def create
    CharacterSkill.create(name: params[:name], level: params[:level].to_i, npc_id: params[:npc_id])
  end
end
