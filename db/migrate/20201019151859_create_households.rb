class CreateHouseholds < ActiveRecord::Migration[6.0]
  def change
    create_table :households do |t|
      t.string :name
      t.string :street
      t.string :city
      t.string :state
      t.integer :zip_code
      t.string :wifi_username
      t.string :wifi_password
      t.string :temp_low
      t.string :temp_high
      t.string :notes

      t.timestamps
    end
  end
end
