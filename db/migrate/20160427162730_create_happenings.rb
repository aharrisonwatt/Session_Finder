class CreateHappenings < ActiveRecord::Migration
  def change
    create_table :happenings do |t|
      t.integer :user_id, null: false
      t.datetime :date, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.string :game, null:false

      t.timestamps null: false
    end

    add_index :happenings, :user_id
  end
end
