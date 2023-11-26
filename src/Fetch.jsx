import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBeer } from 'react-icons/fa';
import { BsFillSendCheckFill } from 'react-icons/bs';

const Fetch = () => {
  const [apidata, setApidata] = useState([]); // Use an array as the initial state.
  const [updateText, setUpdateText] = useState('');

  const handleSearch = () => {
    axios
      .get('https://www.omdbapi.com/?t=the%20departed&apikey=a5ef1268')
      .then((res) => {
        console.log(res.data);
        setApidata(res.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // useEffect is missing, so the initial data fetch doesn't happen when the component is mounted.
  useEffect(() => {
    handleSearch();
  }, []);

  const handleDelete = (id) => {
    // Filter out the item with the specified ID to delete it.
    const updatedData = apidata.filter((item) => item.id !== id);
    setApidata(updatedData);
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
    toast('updated success')
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
        theme="light" />
      
<div>
  <p>{apidata.Title}</p>
<Link to={`/view/${apidata.imdbID}`}><button>view more</button></Link>
</div>

    </div>
  );
};

export default Fetch;
