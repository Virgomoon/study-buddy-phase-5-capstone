class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :entry, :ref_links, :vid_url, :subject_id, :user_id

  belongs_to :subject
  belongs_to :user
  # has_many :users
  # :subject_id
  # :user_id
 
  # t.index ["subject_id"], name: "index_notes_on_subject_id"
  # t.index ["user_id"], name: "index_notes_on_user_id"
end
