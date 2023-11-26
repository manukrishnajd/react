import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Fetch = () => {
  const [apidata, setApidata] = useState([]); // Use an array as the initial state.
  const [updateText, setUpdateText] = useState('');

  const handleFetchData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setApidata(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleDelete = (id) => {
    // Filter out the item with the specified ID to delete it.
    const updatedData = apidata.filter((item) => item.id !== id);
    setApidata(updatedData);
    toast('Deleted successfully');
  };

  const handleUpdate = (id) => {
    // Update the item's title with the text entered in the input field.
    const updatedData = apidata.map((item) => {
      if (item.id === id) {
        return { ...item, title: updateText };
      }
      return item;
    });
    setApidata(updatedData);
    setUpdateText(''); // Clear the input field after updating.
    toast('Updated successfully');
  };

  let handlechange = (e) => {
    setUpdateText(e.target.value);
  };

  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {apidata.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <Link to={`/view/${post.id}`}>
            <button>View More</button>
          </Link>

          <input
            type="text"
            onChange={handlechange}
            value={updateText}
            name=""
            id=""
          />
          <button onClick={() => handleUpdate(post.id)}>Update</button>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Fetch;
