class Contact < ApplicationRecord
  belongs_to :household

  validates :name, presence: true
end
