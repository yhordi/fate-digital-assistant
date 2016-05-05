class CharacterSkillsController < ApplicationController
  def create
   char_skill = CharacterSkill.create(name: params[:name], level: params[:level].to_i, npc_id: params[:npc_id])
   npc = Npc.find(char_skill.npc_id)
   p "*"*80
   skills = Skill.where(system_id: params[:system_id])
   char_skills = npc.character_skills
   render json: {data: npc, character_skills: char_skills, skills: params[:skills]}
  end
end
