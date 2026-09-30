# Bloggy — Node.js Blog Practice Project

A small blog application built while learning Node.js and backend development. Visitors can view blog posts, open a post, create a post, and delete a post. The application renders pages on the server with EJS and stores posts in MongoDB.

> **Project scope:** Despite the repository name, the current code is an Express/EJS/MongoDB application. It does not yet contain a React frontend or a complete MERN stack.

## Features

- List posts in newest-first order
- View an individual post
- Create a post with a title, introduction, and body
- Delete a post
- About and Contact pages
- Custom 404 page and request logging

## Tech stack

Node.js, Express, EJS, Mongoose, MongoDB, `express-ejs-layouts`, Morgan, and Nodemon. The repository also contains separate Node.js practice scripts for the file system, HTTP server, modules, globals, and streams.

## Getting started

You need Node.js with npm and a MongoDB database (local or Atlas). Run commands from the project root.

**The archived version needs the three fixes below before it can run reliably:**

1. **Install the missing dependencies.** `app.js` imports Mongoose and `express-ejs-layouts`, but neither is declared in the supplied `package.json`.

   ```bash
   npm install
   npm install mongoose express-ejs-layouts
   ```
2. **Correct the route filename in `app.js`.** The file is named `routes/BlogRoutes.js`, while the import uses a different capitalization. Use:

   ```js
   const blogRoutes = require('./routes/BlogRoutes');
   ```

3. **Move the MongoDB connection string out of `app.js`.** Replace the hard-coded `mongoURL` declaration with:

   ```js
   const mongoURL = process.env.MONGODB_URI;
   if (!mongoURL) throw new Error('MONGODB_URI is required');
   ```

   Set the variable in your terminal before starting the app. For example, in Bash:

   ```bash
   export MONGODB_URI='mongodb://127.0.0.1:27017/bloggy'
   npm start
   ```

   Or, for an Atlas database, set `MONGODB_URI` to your own Atlas connection string. In PowerShell, set it with `$env:MONGODB_URI = 'your-connection-string'` before running `npm start`. The `.gitignore` excludes `.env`, but the current application does not load `.env` automatically.

Then open **http://localhost:3000**. The server starts after MongoDB connects successfully. `npm start` runs `nodemon app.js`, so it restarts during development when files change.
