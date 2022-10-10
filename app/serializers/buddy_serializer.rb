class BuddySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :buddy_id

  belongs_to :user
  has_one :buddy

end
