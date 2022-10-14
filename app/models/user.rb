class User < ApplicationRecord
    validates :username, :presence => true, :uniqueness => true

    has_secure_password
    has_many :notes
    has_many :subjects, through: :notes
    has_many :buddies
    has_many :users, :source => :buddy, :through => :buddies

    validates :username, presence: true, uniqueness: true

    def potential_buddies
        User.where.not(id: Buddy.where(user_id: self.id).pluck(:buddy_id))        

    end

    
end
