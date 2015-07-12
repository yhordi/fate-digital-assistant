class LocationsController < ApplicationController
  def show
    @location = Location.find(params[:id])
    @aspects = Aspect.where(aspectable_id: params[:id])
    render partial: 'show'
  end
end