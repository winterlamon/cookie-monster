class CreateCookies < ActiveRecord::Migration[5.1]
  def change
    create_table :cookies do |t|
      t.string :name
      t.string :image_url
      t.string :ingredients
      t.string :prep_time
      t.string :bake_time
      t.timestamps
    end
  end
end
