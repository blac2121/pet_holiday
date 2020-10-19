class HouseholdsController < ApplicationController
  before_action :set_household, only: [:show, :update, :destroy]

  def index
    @households = Household.all 

    render json: @households
  end

  def show
    render json: @household, include: [:pets, :contacts]
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
    if @household.update(household_params)
      render json: @household
    else
      render json: @household.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @household.destroy
  end

  private
  def set_household
    @household = Household.find(params[:id])
  end

  def household_params
    params.require(:household).permit(:name, :street, :city, :state, :zip_code, :wifi_username, :wifi_password, :temp_low, :temp_high, :notes)
  end

end
