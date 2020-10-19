class HouseholdsController < ApplicationController

  def index
    @households = Household.all 

    render json: @households
  end

  def show
    render json: @household, include: [:pets :contacts]
  end

  def create
    @household = Household.new(household_params)

    if @household.save
      render json: @household, status: :created, location: @household
    else
      render json: @household.errors, status: :unprocessable_entity
    end
  end

  def update
    @dojo = Dojo.find(params[:id])
    @dojo.update(params)

    render json: @dojo
  end

  def destroy
    @dojo = Dojo.find(params[:id])

    @dojo.destroy
  end

  private
  def set_household
    @household = Household.find(params[:id])
  end

  def household_params
    params.require(:household).permit(:name)
  end

end
