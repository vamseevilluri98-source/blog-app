const Blog = require("../models/blog")
const userViewCount = require("../models/userViewCount")
module.exports = {
    async saveBlog(req,res){
        try{
            if(!req.body){
               return res.status(422).json({success : false,message: "Invalid request!"})
            }
            let title = req.body.title.trim();
            let description = req.body.description.trim();
            if(!title){
               return  res.status(422).json({success : false, message: "Blog title is required!"})
            }
            if(!description){
               return res.status(422).json({success : false, message: "Blog description is required!"})
            }
            const checkBlog = await Blog.findOne({title:title});
            if(checkBlog){
               return res.status(422).json({success : false, message: "Blog Title already exist!"})
            }
            const data = {
                title : title,
                description:description
            }
            await Blog.create(data);
            return res.status(200).json({success : true, message: "Blog saved successfully!"})

        }catch(error){
          return  res.status(400).json({success : false,message: error.message})
        }
    },
    async getBlogs(req, res) {
        try {
            let limit = +(req.query.limit || 1000);
            let page = +(req.query.page || 0);
            let aggregate_query = [
                {
                    $project: {
                        title: 1,
                        description: 1,
                        createdAt: 1,

                    }
                },
                {
                    $group: {
                        _id: null,
                        docs: { $push: "$$ROOT" },
                        totalcount: { $sum: 1 }
                    }
                },
                {
                    $unwind: "$docs"
                },
                {
                    $sort: {
                        "docs._id": -1
                    }
                },
                {
                    $skip: page * limit
                },
                {
                    $limit: limit
                },
                {
                    $group: {
                        _id: null,
                        docs: {
                            $push: "$docs"
                        },
                        headers: {
                            $first: {
                                total_count: "$totalcount",
                                total_pages: {
                                    $ceil: {
                                        $divide: [
                                            "$totalcount",
                                            limit
                                        ]
                                    }
                                },
                                current_page: page,
                                limit: limit
                            }
                        }
                    }
                }
            ];

            const result = await Blog.aggregate(
                aggregate_query
            ).exec();
            let headers = result[0].headers || {}
            res.set(headers);
            return res.status(200).json({
                success: true,
                data: result[0]?.docs || []
            });

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message
            });

        }
    },
    async getBlog(req, res) {
        try {
            if (!req.params) {
                return res.status(422).json({ success: false, message: "Invalid request!" })
            }
            if (!req.params.id) {
                return res.status(422).json({ success: false, message: "Invalid user!" })
            }
            let data = await Blog.findOne(
                { _id: req.params.id }
            );
            return res.status(200).json({ success: true, message: "Blog details!", data: data })


        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });


        }
    },
    async saveViewCount(req, res) {
        try {
            if (!req.params.user_id) {
                return res.status(422).json({
                    success: false,
                    message: "Invalid user!"
                });
            }
            console.log(req.params.user_id)
            const count = await userViewCount.findOneAndUpdate(
                { user_id: req.params.user_id },
                {
                    $inc: { count: 1 },
                    $setOnInsert: {
                        user_id: req.params.user_id
                    }
                },
                {
                    upsert: true,
                    returnDocument: "after"
                }
            );
            return res.status(200).json({
                success: true,
                message: "View count saved successfully!",
                count
            });


        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

}