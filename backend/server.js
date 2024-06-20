const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const postsRouter = require("./routes/posts");
require("dotenv").config();
const path = require("path");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth");
const protectedRouter = require("./routes/protected");
const authMiddleware = require("./middleware/auth");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allow these methods
    credentials: true, // Allow cookies to be sent
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Basic route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/posts", postsRouter);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/auth", authRouter);
// app.use("/api/protected", authMiddleware, protectedRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
