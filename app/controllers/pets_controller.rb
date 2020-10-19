class PetsController < ApplicationController

  def index
    @household = Household.find(params[:@household_id]) 
    @pets = Pet.where(@household_id: @household.id) 

    render json: @pets, include: :@household_id, status: :ok
  end

  def show
    render json: @pet
  end

  def create
    @pet = Pet.new(pet_params)

    if @pet.save
      #is this the right contact or os the the contact with ID
      render json: @pet, status: :created, location: @household_id
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
    @pet = Pet.find(params[:id])
  end

  def pet_params
    params.require(:pet).permit(:name)
  end

end
