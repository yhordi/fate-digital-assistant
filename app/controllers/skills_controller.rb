class SkillsController < ApplicationController
  def index
    skills = Skill.where(system_id: params[:system_id])
    render :json => skills
  end
end
