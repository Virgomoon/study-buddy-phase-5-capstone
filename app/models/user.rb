class User < ApplicationRecord
    validates :username, :presence => true, :uniqueness => true

    has_secure_password
    has_many :notes, dependent: :destroy
    has_many :subjects, through: :notes, dependent: :destroy
    has_many :buddies, dependent: :destroy
    has_many :users, :source => :buddy, :through => :buddies, dependent: :destroy

    validates :username, presence: true, uniqueness: true
    
end
