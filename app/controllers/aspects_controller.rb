class AspectsController < ApplicationController

  def create
    p params
    aspect = Aspect.new(aspect_params)
    aspect.aspectable_id = params[:aspect][:aspectable_id].to_i
    aspect.aspectable_type = params[:aspect][:aspectable_type]
    aspect.save!
    render json: aspect
  end

  def destroy
    aspect = Aspect.find(params[:id])
    aspect.delete
    npc = Npc.find(params[:aspectable_id])
    render json: {aspects: npc.aspects}
  end

  private

  def aspect_params
    params.require(:aspect).permit(:name, :description, :aspectable_id, :aspectable_type)
  end

end
