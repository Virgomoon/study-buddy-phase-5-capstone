class Buddy < ApplicationRecord
    validates :buddy_id,  :presence => true, :uniqueness => true

    belongs_to :user
    belongs_to :buddy, :class_name => "User", :foreign_key => "buddy_id", dependent: :destroy
    has_many :users, through: :buddy, dependent: :destroy
    has_many :notes, through: :users

end
