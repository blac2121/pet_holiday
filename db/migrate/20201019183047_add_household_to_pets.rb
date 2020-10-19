class AddHouseholdToPets < ActiveRecord::Migration[6.0]
  def change
    add_reference :pets, :household, null: false, foreign_key: true
  end
end
