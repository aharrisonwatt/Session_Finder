class AddImageColHappenings < ActiveRecord::Migration
  def change
    add_column :happenings, :image, :string
  end
end
