const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");
const { upload } = require("../utils/fileUpload");
const cloudinary = require("cloudinary").v2;

router.post("/", protect, upload.single("image"), createProduct);
router.patch("/:id", protect, upload.single("image"), updateProduct);
router.get("/", protect, getProducts);
router.get("/:id", protect, getProduct);
router.delete("/:id", protect, deleteProduct);

router.post("/upload", (req, res) => {
  const path = req.body.path;
  cloudinary.uploader.upload(path, (error, result) => {
    if (error) {
      res.status(500).send(error);
    }
    res.send(result.url);
  });
});

module.exports = router;
