class ContactsController < ApplicationController

  def index
    @household = Household.find(params[:@household_id]) 
    @contacts = Contact.where(household_id: @household.id) 

    render json: @contacts, include: :@household, status: :ok
  end

  def show
    render json: @contact
  end

  def create
    @contact = Contact.new(contact_params)

    if @contact.save
      #is this the right contact or os the the contact with ID
      render json: @contact, status: :created, location: @household
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  def update
    if @contact.update(contact_params)
      render json: @contact
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @contact.destroy
  end

  private
  def set_contact
    @contact = Contact.find(params[:id])
  end

  def contact_params
    params.require(:contact).permit(:name, :img, :relationship, :phone_num, :notes, :household_id)
  end

end
