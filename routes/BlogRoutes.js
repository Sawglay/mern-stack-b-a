const express = require('express');

const router = express.Router();

router.get("/blogs",);

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