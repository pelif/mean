const Post = require('./../../models/post')
const slugify = require('slugify')

module.exports = async (req, res) => {

    req.body.slug = slugify(req.body.title, { lower: true })
    const post = new Post(req.body)

    try {
        const saved = await post.save()
        return res.status(201).json({saved})
    } catch (err) {
        return res.statu(500).json({err})
    }
    
}