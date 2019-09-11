const express = require('express');

const db = require('../data/dbConfig.js')

const router = express.Router();

router.get('/', (req, res) => {
  db('customers') //Select * from orders
    .then(orders => {
      res.json(orders);
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to get orders' });
    })
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db('customers').where({ id })
    .then(posts => {
      const post = posts[0];

      if (post) {
        res.json(post);
      } else {
        res.status(400).json({ message: 'invalid post id' })
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to the post' });
    })
});

router.post('/', (req, res) => {
  const post = req.body;
  db('customers').insert(post)
    .then(post => {
      res.status(201).status(post)
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to insert post' })
    })
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db('customers').where({ id }).update(changes)
    .then(count => {
      if (count) {
        res.json({ updated: count })
      } else {
        res.status(404).json({ message: 'invalid post id' })
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to update post' })
    })


});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db('customers').where({ id }).del()
    .then((post) => {
      if (post) {
        res.status(202).json({ message: 'Post deleted' });
      } else {
        res.status(400).json({ error: 'The post does not exist' });
      }
    })
    .catch(error => {
      res.status(500), json({ message: 'Failed to delete anything' })
    })
});

module.exports = router;