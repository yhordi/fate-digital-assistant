class AspectsController < ApplicationController

  def create
    aspect = Aspect.new(aspect_params)
    aspect.aspectable_id = params[:aspect][:aspectable_id].to_i
    aspect.aspectable_type = params[:aspect][:aspectable_type]
    if aspect.save
      render json: { aspects: Aspect.where(aspectable_id: aspect.aspectable_id) }
    else
      render json: { errors: aspect.errors.full_messages }
    end
  end

  def destroy
    aspect = Aspect.find(params[:id])
    aspectable = params[:aspect][:aspectable_type].constantize
    aspects = aspectable.find(params[:aspect][:aspectable_id]).aspects
    aspect.delete
    render json: {aspects: aspects}
  end

  def update
    aspect = Aspect.find(params[:id])
    aspect.update_attributes(aspect_params)
    aspectable = params[:aspect][:aspectable_type].constantize
    aspects = aspectable.find(params[:aspect][:aspectable_id]).aspects
    render json: {aspects: aspects}
  end

  private

  def aspect_params
    params.require(:aspect).permit(:name, :description, :aspectable_id, :aspectable_type)
  end

end
