class SkillsController < ApplicationController
  def index
    skills = Skill.where(system_id: params[:system_id])
    render :json => skills
  end

  def create
    skill = Skill.create!(skill_params)
    render :json => skill
  end

  private

  def skill_params
    params.require(:system).permit(:name, :description, :advantage, :overcome, :attack, :defend)
  end
end
