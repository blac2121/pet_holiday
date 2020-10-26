Household.destroy_all


Household.create(
  name: 'Smith', 
  street: '123 Main st',
  city: 'Boston',
  state: 'MA',
  zip_code: 01020,
  wifi_username: 'wifi name',
  wifi_password: 'wifi password',
  temp_low: '68F',
  temp_high: '72F',
  notes: 'These are notes'
)

Pet.create(
  name: 'Smitty', 
  img: 'image',
  age: 4,
  medical_description: 'Healthy',
  feeding_description: 'Once a day in the afternoon',
  notes: 'He needs a sweater overnight',
  household_id: 1
)

Contact.create(
  name: 'Megan Smith', 
  img: 'image',
  relationship: 'Homeowner',
  phone_num: '456-555-1236',
  notes: 'I will be in a conference so I am only available after 5pm',
  household_id: 1
)

puts "#{Household.count} households created!"
puts "#{Pet.count} pets created!"
puts "#{Contact.count} contacts created!"