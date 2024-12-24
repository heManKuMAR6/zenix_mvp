const express = require('express');
const { getRewards, addReward } = require('../controllers/rewardsController');
const router = express.Router();

// Rewards routes
router.get('/', getRewards);
router.post('/', addReward);

module.exports = router;
