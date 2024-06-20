import axios from "axios";

const API_URL = "http://localhost:5000/api/posts";

// export const fetchPosts = async ({ filter, sortBy, page }) => {
//   const response = await axios.get(API_URL, {
//     params: {
//       filter: JSON.stringify(filter),
//       sortBy: JSON.stringify(sortBy),
//       page,
//       limit: 10, // Set the page size here
//     },
//   });
//   return response.data;
// };

export const fetchPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchPost = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createPost = async (newPost) => {
  // console.log("api post: " + JSON.stringify(newPost));

  const response = await axios.post(API_URL, newPost, {
    headers: {
      "Content-Type": "multipart/form-data",
      // "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const updatePost = async ({ newPostData, id }) => {
  const response = await axios.patch(`${API_URL}/${id}`, newPostData);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
