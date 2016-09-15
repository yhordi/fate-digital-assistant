class CharacterSkillsController < ApplicationController
  def create
    character_skill = CharacterSkill.new(name: params[:name], level: params[:level].to_i, npc_id: params[:npc_id])
    npc = Npc.find(character_skill.npc_id)
    if character_skill.save!
      npc.adjust_max_stress(character_skill)
      skills = Skill.names(params[:system_id])
      character_skills = npc.character_skills.order('name')
      render json: {
        data: npc,
        character_skills: character_skills,
        skills: skills,
      }
    else
      render json: {data: character_skill.errors.full_messages}
    end
  end

  def update
    character_skill = CharacterSkill.find(params[:id])
    npc = Npc.find(character_skill.npc_id)
    if character_skill.update!(level: params[:level])
      npc.adjust_max_stress(character_skill)
      character_skills = npc.character_skills.order('name')
      render json: npc, include: :character_skills
    else
      render json: {data: character_skill.errors.full_messages}
    end
  end

  def destroy
    character_skill = CharacterSkill.find(params[:id])
    npc = Npc.find(params[:npc_id])
    npc.reset_max_stress(character_skill)
    character_skill.delete
    render json: {characterSkills: npc.character_skills.order('name'), data: npc}
  end
end
