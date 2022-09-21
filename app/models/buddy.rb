class Buddy < ApplicationRecord
    belongs_to :user
    belongs_to :buddy, :class_name => "User", :foreign_key => "buddy_id"
    has_many :notes, through: :users
end
