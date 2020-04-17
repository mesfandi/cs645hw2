const express = require("express");
const Post = require("../models/post");
// const db = require("./database");
const Sequelize = require("sequelize");

const sequelize = require("../databaseSequelize");

const router = express.Router();
router.use((rep, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATH, DELETE, PUT, OPTIONS"
  );

  next();
});

router.post("/api/posts", (req, res, next) => {
  const post = {
    suggest: req.body.suggest,
    content: req.body.content,
    raffle: req.body.raffle,
    intrested: req.body.intrested,

    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,

    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    tel: req.body.tel,
    email: req.body.tel,

    student: req.body.student,
    location: req.body.location,
    campus: req.body.campus,
    atmosphere: req.body.atmosphere,
    doreroom: req.body.doreroom,
    sports: req.body.sports,
  };
  console.log(post);

  Post.create(post).then((createdPost) => {
    res.status(200).json({
      message: "post is added successfully",
      postId: createdPost._id,
    });
  });
});

router.get("/api/posts", (req, res, next) => {
  Post.findAll().then((documents) => {
    console.log(documents);
    res.status(200).json({
      message: "post is added successfully",
      posts: documents,
    });
  });
});

router.get("/api/posts/:id", (req, res, next) => {
  Post.findByPk(req.params.id).then((post) => {
    if (post) {
      console.log(post);
      res.status(200).json(post);
    } else {
      res.status(201).json({ message: "form not found!" });
    }
  });
});

router.put("/api/posts/:id", (req, res, next) => {
  const post = req.body;
  post._id = req.params.id;
  Post.update(post, { where: { _id: req.params.id } }).then((result) => {
    res.status(200).json({ message: "Updated Successfully!!!" });
  });
});

router.delete("/api/posts/:id", (req, res, next) => {
  Post.destroy({ where: { _id: req.params.id } }).then((result) => {
    console.log(result);
    res.status(200).json({ message: "post Deleted" });
  });
});

module.exports = router;
