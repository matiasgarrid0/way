import { dbConnect } from '../utils/mongo';
import courseSchema from '../models/course';

dbConnect();

const Course = {
    async listCourses() {
        try {   
            const courses = await courseSchema.find();
            if(!courses){
                throw new Error('Courses not found')
            }
            return courses;        
        } catch (err) {
            console.log(err);
            return err;
        }

    },
    async findCourse(id){
        try {
            const course = await courseSchema.findById({id});
            if(!course){
                throw new Error('course not found');
            }
            return course;
        } catch (err) {
            console.log(err);
            return err;
        }
    },
    async deleteCourse(id){
        try {
            await courseSchema.deleteOne({id});
        } catch (err) {
            console.log(err);
            return err;
        }
    },
    async updateCourse(data){
        // to do
    }, 
    async createCourse(data){
        // to do;
    }
}

export default Course;