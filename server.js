const express = require("express");
const app = express();
const mongoose = require("mongoose"); //database connect
const bodyParser = require("body-parser");

//MiddleWares
app.use(express.json());
app.use(bodyParser.json());
const cors = require("cors"); //cors //server secure
app.use(cors());
app.use(express.static("images"));

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "dsabhfbjkfbajefbulfiehufi";
const mongoUrl =
  "mongodb+srv://admin:test@mobizilla.umhu4fg.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", false); //Because i was getting a depriciation warning
mongoose
  .connect(mongoUrl, { useNewUrlParser: true }) //condi statemnt
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));
//Express Route For SignUp
require("./Models/userModel");
const User = mongoose.model("UserInfo");
app.post("/register", async (req, res) => {
  const { userName, fullName, email, description, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.json({ error: "User Already Exists" });
    }
    await User.create({
      userName,
      fullName,
      email,
      description,
      password: encryptedPassword,
    });
    res.send({ status: "Registered" });
  } catch (error) {
    res.send({ status: "Error Occured" });
  }
});
//Express Route For Signin
app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: 10,
    });
    //201 Means Created
    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "Invalid Password" });
});

const Products = require("./Models/postModel");
//Express Route For Posts(product addition)
app.post("/products/add", upload.single("imageURL"), (req, res) => {
  const productDetail = JSON.parse(req.body.product);
  productDetail.imageURL = req.file.path;

  Products.create(productDetail, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
      console.log(err);
    } else {
      res.status(201).send(data);
      console.log(data);
    }
  });
});

app.get("/products/get", (req, res) => {
  Products.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.delete("/products/delete/:id", async (req, res) => {
  const pid = req.params.id;
  let prod = await Products.findByIdAndRemove(pid);
  if (!prod) {
    res.status(500).json({ message: "couldnt delete" });
  } else {
    res.status(200).json({ message: "product deleted" });
  }
});

app.listen(5000, () => {
  console.log("Server Started on Port 5000");
});
