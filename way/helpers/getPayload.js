import base64 from 'base-64';
import cookie from 'cookie';

export default function getPayload(cookies, side) {
  if (side == 'front') {
    const parse = cookies.split('.');
    const decoded = JSON.parse(base64.decode(parse[1]));
    return decoded;
  } else {
    try {
    if(cookies?.value){

      let authToken = cookies.value;      
      const parse = authToken.split('.');
      const decoded = JSON.parse(base64.decode(parse[1]));
      return decoded;
    } 
    return false;
} catch (error) {
       console.log(error,'here'); 
}
  }
}