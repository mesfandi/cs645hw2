const express = require("express");
const Post = require("../models/post");

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

router.get("/", (req, res) => {
  res.send({ hi: "there" });
});

router.post("/api/posts", (req, res, next) => {
  const post = new Post({
    suggest: req.body.suggest,
    content: req.body.content,
    raffle: req.body.raffle,
    intrested: req.body.intrested,
    personalInfo: {
      firstName: req.body.personalInfo.firstName,
      lastName: req.body.personalInfo.lastName,
      dateOfBirth: req.body.personalInfo.dateOfBirth,
    },

    address: {
      street: req.body.address.street,
      city: req.body.address.city,
      state: req.body.address.state,
      zip: req.body.address.zip,
      tel: req.body.address.tel,
      email: req.body.address.tel,
    },
    liked: {
      student: req.body.liked.student,
      location: req.body.liked.location,
      campus: req.body.liked.campus,
      atmosphere: req.body.liked.atmosphere,
      doreroom: req.body.liked.doreroom,
      sports: req.body.liked.sports,
    },
  });
  post.save().then((createdPost) => {
    res.status(200).json({
      message: "post is added successfully",
      postId: createdPost._id,
    });
  });
});

router.get("/api/posts", (req, res, next) => {
  Post.find().then((documents) => {
    res.status(200).json({
      message: "post is added successfully",
      posts: documents,
    });
  });
});

router.get("/api/posts/:id", (req, res, next) => {
  Post.findById(req.params.id).then((post) => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(201).json({ message: "form not found!" });
    }
  });
});

router.put("/api/posts/:id", (req, res, next) => {
  const post = req.body;
  post._id = req.params.id;
  Post.updateOne({ _id: req.params.id }, post).then((result) => {
    res.status(200).json({ message: "Updated Successfully!!!" });
  });
});

router.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.status(200).json({ message: "post Deleted" });
  });
});

module.exports = router;
