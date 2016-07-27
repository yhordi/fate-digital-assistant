class CharacterSkillsController < ApplicationController
  def create
    character_skill = CharacterSkill.new(name: params[:name], level: params[:level].to_i, npc_id: params[:npc_id])
    character_skill.save!
    npc = Npc.find(character_skill.npc_id)
    skills = Skill.names(params[:system_id])
    character_skills = npc.character_skills
    render json: {data: npc, character_skills: character_skills, skills: skills}
  end

  def update
    character_skill = CharacterSkill.find(params[:id])
    npc = Npc.find(character_skill.npc_id)
    character_skill.update(level: params[:level])
    if params.include?("Phsyique") || params.include?("Will")
      Npc.find(params[:npc_id]).calculate_max_stress
    end
    render json: npc.character_skills
  end

  def destroy
    character_skill = CharacterSkill.find(params[:id])
    character_skill.delete
    npc = Npc.find(params[:npc_id])
    render json: {characterSkills: npc.character_skills}
  end
end
