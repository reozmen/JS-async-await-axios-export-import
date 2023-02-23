import axios from "axios";

const getData = async (id) => {
  try {
    const { data: users } = await axios(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const { data: posts } = await axios(
      `https://jsonplaceholder.typicode.com/posts?id=${id}`
    );

    const newObj = { ...users, posts };

    console.log(newObj);
  } catch (error) {
    console.log(error);
  }
};

export default getData;
