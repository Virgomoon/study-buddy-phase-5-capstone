class Buddy < ApplicationRecord
    validates :buddy_id,  :presence => true

    belongs_to :user
    belongs_to :buddy, :class_name => "User", :foreign_key => "buddy_id"
    has_many :users, through: :buddy
    has_many :notes, through: :users

end
