class AddNullConstraint < ActiveRecord::Migration
  def change
    change_column :happenings, :image, :string, null: false
  end
end
