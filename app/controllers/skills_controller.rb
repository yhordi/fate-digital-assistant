class SkillsController < ApplicationController
  def index
    skills = Skill.where(system_id: params[:system_id])
    render :json => skills
  end

  def show
    skill = Skill.find(params[:id])
    render :json => skill
  end
end
