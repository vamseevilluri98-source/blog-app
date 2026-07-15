import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios"
function BlogDetails() {
    const [views, setViews] = useState(1);
    const [blog, setBlog] = useState({});
    const user_id = localStorage.getItem("user_id") || 1;
    const { id } = useParams();
    useEffect(() => {
        incrementView();
        getBlog();
    }, []);
    const incrementView = async () => {
        try {
            const { data } = await axios.get(
                `http://localhost:3000/${user_id}/view`
            );
            setViews(data.count.count);


        } catch (err) {
            console.log(err);
        }
    }
    const getBlog = async () => {
        try {
            const data = await axios.get(
                `http://localhost:3000/blog-detail/${id}`
            );
            setBlog(data.data.data);


        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="container mt-4">
            <p>Views: {views}</p>
            <div className="d-flex flex-column align-items-center">
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
            </div>
        </div>
    )

}


export default BlogDetails
