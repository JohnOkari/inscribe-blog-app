class CreateBlogs < ActiveRecord::Migration[7.0]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :content
      t.string :writer
      t.string :image
      t.integer :author_id

      t.timestamps
    end
  end
end
