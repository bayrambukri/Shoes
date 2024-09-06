import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4040",
});

/* // GET Request
const fetchData = async () => {
  try {
    const response = await axios.get("shoes-collections.p.rapidapi.com");
    console.log("Data:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// POST Request
const postData = async () => {
  try {
    const data = {
      name: "John Doe",
      email: "johndoe@example.com",
    };

    const response = await axios.post("shoes-collections.p.rapidapi.com", data);
    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error posting data:", error);
  }
};

// PUT Request
const updateData = async () => {
  try {
    const data = {
      name: "Jane Doe",
    };

    const response = await axios.put("shoes-collections.p.rapidapi.com", data);
    console.log("Updated data:", response.data);
  } catch (error) {
    console.error("Error updating data:", error);
  }
};

// DELETE Request
const deleteData = async () => {
  try {
    const response = await axios.delete("shoes-collections.p.rapidapi.com");
    console.log("Deleted data:", response.data);
  } catch (error) {
    console.error("Error deleting data:", error);
  }
};

// Function calls
fetchData();
postData();
updateData();
deleteData();
 */
