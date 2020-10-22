class PetsController < ApplicationController
  before_action :set_pet, only: [:show, :update, :destroy]

  def index
    @household = Household.find(params[:household_id]) 
    @pets = Pet.where(household_id: @household.id) 

    render json: @pets, include: :@household, status: :ok
  end

  def show
    render json: @pet
  end

  def create
    @pet = Pet.new(pet_params)

    if @pet.save
      render json: @pet, status: :created, location: @household
    else
      render json: @pet.errors, status: :unprocessable_entity
    end
  end

  def update
    if @pet.update(pet_params)
      render json: @pet
    else
      render json: @pet.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @pet.destroy
  end

  private
  def set_pet
    @pet = Pet.find(params[:id].to_i)
  end

  def pet_params
    params.require(:pet).permit(:name, :img, :age, :medical_description, :feeding_description, :notes, :household_id )
  end

end
