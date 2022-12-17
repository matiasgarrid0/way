import axios from 'axios';
import { useState } from 'react'

export default function Upload  (props) {
  const [picture, setPicture] = useState(null);
  
  const onChange = async (e) => {
    const formData = new FormData();
    formData.append('file',e.target.files[0]);
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      /*onUploadProgress: (event) => {
        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
      },*/
    };

    const response = await axios.post('/api/upload/1', formData);
    setPicture(response.data);
    console.log('response', response.data);
  };

  return (
    <>
    <input
    type='file'
    name='file'
    onChange={onChange}
    />
    </>
    );
};