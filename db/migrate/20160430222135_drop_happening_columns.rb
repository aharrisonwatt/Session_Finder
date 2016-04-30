class DropHappeningColumns < ActiveRecord::Migration
  def change
    remove_column :happenings, :image, :string
    remove_column :happenings, :game, :string
  end
end
