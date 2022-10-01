class Note < ApplicationRecord
    belongs_to :subject
    belongs_to :user
    has_many :buddies, through: :user
    has_many :users, :source => :buddy, :through => :buddies

    validates :title, presence: true
end
