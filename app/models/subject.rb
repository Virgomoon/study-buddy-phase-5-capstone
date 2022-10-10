class Subject < ApplicationRecord
    validates :title, :presence => true, :uniqueness => true

    has_many :notes, dependent: :destroy
end
