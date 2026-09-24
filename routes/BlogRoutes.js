const express = require('express');

const router = express.Router();
const Blog = require('../models/Blog');
const BlogController = require('../controller/BlogController');

router.get('',BlogController.index);

router.post("/blogs", async (req, res) => {
  let { title, intro, body } = req.body;

  let blog = new Blog({
    title,
    intro,
    body,
  });

  await blog.save();

  res.redirect("/");
});