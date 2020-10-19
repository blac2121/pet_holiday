class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :img
      t.string :relationship
      t.string :phone_num
      t.string :notes

      t.timestamps
    end
  end
end
