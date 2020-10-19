class AddHouseholdToContacts < ActiveRecord::Migration[6.0]
  def change
    add_reference :contacts, :household, null: false, foreign_key: true
  end
end
