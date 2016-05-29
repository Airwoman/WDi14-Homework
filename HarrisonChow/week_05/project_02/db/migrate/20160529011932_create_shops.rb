class CreateShops < ActiveRecord::Migration
  def change
    create_table :shops do |t|
      t.text :name
      t.text :address
      t.text :image
      t.integer :phone
      t.text :website
      t.string :owner_id

      t.timestamps null: false
    end
  end
end
