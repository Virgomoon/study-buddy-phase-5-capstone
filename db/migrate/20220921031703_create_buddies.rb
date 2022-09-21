class CreateBuddies < ActiveRecord::Migration[7.0]
  def change
    create_table :buddies do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :buddy_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
