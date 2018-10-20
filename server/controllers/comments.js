let Comment = require('./../models/Comments');

async function create(req, res) {
  try {
    const {
      body: { email, message }
    } = req;

    if (!email) {
      throw new Error('Email is missing');
    }

    if (!message) {
      throw new Error('Message is missing');
    }

    const comment = new Comment({ email, message });
    const savedComment = await comment.save();
    res.json({
      data: savedComment
    });
  } catch (err) {
    res.json({ errorMessage: err.message });
  }
}

async function query(req, res) {
  try {
    const {
      query: { sortDirection, email, take }
    } = req;

    const limit = parseInt(take) || 0;
    const comments = await Comment.find({ email: { $regex: email || '' } })
      .sort({
        createdAt: sortDirection || 'ascending'
      })
      .limit(limit);

    res.json({
      data: comments
    });
  } catch (err) {
    res.json({ errorMessage: err });
  }
}

module.exports = {
  create,
  query
};
