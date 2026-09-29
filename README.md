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
