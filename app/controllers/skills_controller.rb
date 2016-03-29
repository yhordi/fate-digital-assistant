class SkillsController < ApplicationController
  def index
    skills = Skill.where(system_id: params[:system_id])
    render :json => skills
  end

  def create
    skill = Skill.new(skill_params)
    skill.save!
    render :json => skill
  end

  private

  def skill_params
    params.require(:skill).permit(:name, :description, :advantage, :overcome, :attack, :defend, :system_id)
  end
end
