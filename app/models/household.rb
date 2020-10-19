class Household < ApplicationRecord
  has_many :contacts
  has_many :pets

  validates :name, presence: true
end
