const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// Index route - show all users (community page)
router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.render('users/index.ejs', {
      users: users,
    });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

// Show route - show ONE user's pantry (read-only)
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.render('users/show.ejs', {
      pantryOwner: user,
      pantry: user.pantry,
    });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

module.exports = router;