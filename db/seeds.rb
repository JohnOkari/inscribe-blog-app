# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts "🌱 Seeding blogs..."

require 'faker'

# create some authors
3.times do
  Author.create(name: Faker::Name.name)
end

# create some blogs with random data
Blog.create(
  title: "My First Blog Post", 
  content: "This is my first blog post. Welcome to my blog!", 
  image: "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png", 
  writer: "John Smith", 
  author_id: 1)

Blog.create(title: "The Best Pizza in Town", 
  content: "I recently discovered the best pizza place in town. Their margherita pizza is out of this world!", 
  image: "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png", 
  writer: "Mary Johnson", 
  author_id: 2)

  puts "✅ Done seeding!"
