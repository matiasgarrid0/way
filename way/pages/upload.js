import axios from 'axios';
import { TextField } from '@mui/material'

export default function Upload  (props) {
  
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