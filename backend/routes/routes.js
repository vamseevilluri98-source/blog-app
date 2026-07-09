const express = require("express");
const Api = require("../controllers/api")
const router = express();

router.post("/save-blog",Api.saveBlog);
router.get("/blogs",Api.getBlogs);


module.exports = router;