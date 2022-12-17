import axios from 'axios';
import { TextField } from '@mui/material'

export default function Upload  (props) {
  
  const onChange = async (e) => {
    const response = await axios.post('/api/upload/1');
    console.log('response', response.data);
  };

  return (
    <>
    <input
    onChange={onChange}
    type='file'
    />
    </>
    );
};