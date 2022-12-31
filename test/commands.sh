# Show all DB
show dbs

# Use / create DB
use blog

# Create collection
db.createCollection("posts")

# Create one instance
db.posts.insertOne({
	title: 'Post 1',
	body: 'Body of post',
	category: 'News',
	likes: 1,
	tags: ['news', 'events'],
	date: Date()
})
