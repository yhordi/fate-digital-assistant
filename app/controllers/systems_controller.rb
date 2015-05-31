class SystemsController < ApplicationController
  def new
    @system = System.new
  end

  def index
    @system = System.all
  end
end