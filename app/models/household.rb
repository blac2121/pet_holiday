class Household < ApplicationRecord
  has_many :contacts, :dependent => :destroy
  has_many :pets, :dependent => :destroy

  validates :name, presence: true
end
