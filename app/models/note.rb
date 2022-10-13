class Note < ApplicationRecord
    belongs_to :subject
    belongs_to :user
    # has_many :buddies, through: :user, dependent: :destroy
    # has_many :users, :source => :buddy, :through => :buddies, dependent: :destroy

    validates :title, presence: true
end
