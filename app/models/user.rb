class User < ApplicationRecord
    has_secure_password
    has_many :notes
    has_many :subjects, through: :notes
    has_many :buddies
    has_many :users, :source => :buddy, :through => :buddies
    # has_many :notes, through: :users
end
