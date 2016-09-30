class SkillsController < ApplicationController
  def index
    return render json: Skill.names(params[:system_id]) if params[:names] == 'true'
    skills = Skill.where(system_id: params[:system_id])
    render json: skills
  end

  def create
    skill = Skill.new(skill_params)
    skill.save!
    render json: skill
  end

  def update
    skill = Skill.find(params[:id])
    skill.update_attributes(skill_params)
    render json: skill
  end

  def destroy
    skill = Skill.find(params[:id])
    skill.delete
    render json: Skill.where(system_id: params[:system_id])
  end

  private

  def skill_params
    params.require(:skill).permit(:name, :description, :advantage, :overcome, :attack, :defend, :system_id)
  end
end
