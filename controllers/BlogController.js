const BlogController = {
  index: async (req, res) => {
    let blogs = await Blog.find().sort({ createdAt: -1 });
    console.log(blogs);

    res.render("home", {
      blogs: blogs,
      title: "Home",
    });
  },
};

module.exports = BlogController;
