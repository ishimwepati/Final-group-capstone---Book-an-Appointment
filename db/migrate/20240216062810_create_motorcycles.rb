class CreateMotorcycles < ActiveRecord::Migration[7.1]
  def change
    create_table :motorcycles do |t|
      t.string :motorcycle_name
      t.string :description
      t.string :color
      t.string :image
      t.decimal :price, precision: 8, scale: 2
      t.timestamps
    end

    add_index :motorcycles, :motorcycle_name
    add_index :motorcycles, :color
  end
end
