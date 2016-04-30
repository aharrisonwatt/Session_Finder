class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer :happening_id, null: false
      t.string :image_url, null: false
      t.timestamps null: false
    end
  end
end
