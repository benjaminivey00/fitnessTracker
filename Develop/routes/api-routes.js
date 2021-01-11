const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req, res) => {
	try {
		const result = await db.Workout.find({});
		res.json(result);
	} catch (err) {
		res.status(400).json(err);
	}
});

router.post('/', async ({ body }, res) => {
	try {
		const result = await db.Workout.create(body);
		res.json(result);
	} catch (err) {
		res.status(400).json(err);
	}
});

router.put('/:id', async ({ params, body }, res) => {
	try {
		let savedExercises = [];
		const prevWorkout = await db.Workout.findById(params.id);
		savedExercises = prevWorkout.exercises;
		totalExercises = [ ...savedExercises, body ];
		res.json(totalExercises);
		
		await db.Workout.findByIdAndUpdate(params.id, { exercises: totalExercises });
	} catch (err) {
		res.status(400).json(err);
	}
});

router.get('/range', async (req, res) => {
	try {
		const result = await db.Workout.find({});
		res.json(result);
	} catch (err) {
		res.status(400).json(err);
	}
});


module.exports = router;