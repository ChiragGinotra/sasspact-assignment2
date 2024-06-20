const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const multer = require("multer");
const path = require("path");

// Configure Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Folder where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Unique file name
  },
});

// Initialize Multer with storage configuration
const upload = multer({ storage: storage });

// Middleware function to normalize file path
const normalizeFilePath = (req, res, next) => {
  if (req.file) {
    req.file.normalizedFilename = path.basename(req.file.path);
  }
  next();
};

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// router.get("/", async (req, res) => {
//   try {
//     // Extract query parameters
//     const filter = req.query.filter ? JSON.parse(req.query.filter) : {};
//     const sortBy = req.query.sortBy ? JSON.parse(req.query.sortBy) : {};
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 10;
//     const skip = (page - 1) * limit;

//     // MongoDB query objects
//     const filterObj =
//       filter.field && filter.value ? { [filter.field]: filter.value } : {};
//     const sortObj =
//       sortBy.field && sortBy.direction
//         ? { [sortBy.field]: sortBy.direction === "desc" ? -1 : 1 }
//         : {};

//     // Fetch data from the database
//     const posts = await Post.find(filterObj)
//       .sort(sortObj)
//       .skip(skip)
//       .limit(limit);
//     const count = await Post.countDocuments(filterObj);

//     res.json({ data: posts, count });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// Create a new post
//
router.post(
  "/",
  upload.single("headerImage"),
  normalizeFilePath,
  async (req, res) => {
    const {
      title,
      description,
      keywords,
      authorName,
      serialNo,
      content,
      faqs,
      date,
    } = req.body;

    const headerImage = req.file ? req.file.normalizedFilename : "";

    // Create a new instance of the Post model with the data from the request body
    const post = new Post({
      title,
      serialNo,
      description,
      keywords,
      headerImage,
      authorName,
      content,
      faqs,
      date,
    });

    try {
      const newPost = await post.save();
      res.status(201).json(newPost);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);

// POST endpoint for file upload
router.post("/upload", upload.single("headerImage"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const normalizedImagePath = path.basename(req.file.path);
  res.json({ headerImage: normalizedImagePath });
});

// Get a single post by ID
router.get("/:id", getPost, (req, res) => {
  res.json(res.post);
});

// Update a post
router.patch("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a post
// router.delete("/:id", getPost, async (req, res) => {
//   try {
//     await res.post.remove();
//     res.json({ message: "Deleted Post" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    await post.deleteOne(); // Using deleteOne to remove the post

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get post by ID
async function getPost(req, res, next) {
  let post;
  try {
    post = await Post.findById(req.params.id);
    if (post == null) {
      return res.status(404).json({ message: "Cannot find post" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.post = post;
  next();
}

module.exports = router;
