class BuddySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :buddy_id

  has_many :users
end
