import { useState,useEffect } from "react";
import axios from 'axios';
const Curso = ({id}) => {
    const [course, setCourse] = useState(null);

    const getCourse = () => {
        console.log(id);
        axios.get(`/api/courses/${id}`)
        .then((data)=>(console.log(data)))
        .catch((err)=>(console.log(err)))
    };

    useEffect(()=>{
        getCourse();
    },[]);

    return (
        <div>
            cursos!
        </div>
    )
}


Curso.getInitialProps = async ({ query }) => {
    const {id} = query
    
    return {id}
}
export default Curso;