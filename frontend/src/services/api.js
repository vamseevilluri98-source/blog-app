import axios from "axios";
export const saveBlog = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/save-blog",
      data
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }

    return {
      success: false,
      message: "Something went wrong."
    };
  }
};
export const getBlogs = async (page = 0,limit = 1000) => {
  const response = await axios.get(
    `http://localhost:3000/blogs?page=${page}&limit=${limit}`
  );
  return response.data;
};