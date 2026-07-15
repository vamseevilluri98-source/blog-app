const express = require("express");
const Api = require("../controllers/api")
const router = express();

router.post("/save-blog",Api.saveBlog);
router.get("/blogs",Api.getBlogs);
router.get("/blog-detail/:id",Api.getBlog);
router.get("/:user_id/view",Api.saveViewCount);


module.exports = router;