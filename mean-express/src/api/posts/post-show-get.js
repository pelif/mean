const Post = require('./../../models/post')

module.exports = async (req, res) => {
    const { slug } = req.params
    if(!slug) {
        return res.status(404).end()
    }

    try {
        const post = await Post.findOne({ slug })
        return res.status(200).json({ post: post || {} })
    } catch (err) {
        return res.status(500).json({ err })
    }
}