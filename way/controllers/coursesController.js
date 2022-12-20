import { dbConnect } from '../utils/mongo';
import courseSchema from '../models/course';

dbConnect();

const Course = {
    async listCourses() {
        try {
            const courses = await courseSchema.find();
            if (!courses) {
                throw new Error('Courses not found')
            }
            return courses;
        } catch (err) {
            console.log(err);
            return err;
        }

    },
    async findCourse(id) {
        try {
            const course = await courseSchema.findById({ _id: id });
            if (!course) {
                throw new Error('course not found');
            }
            return course;
        } catch (err) {
            console.log(err);
            return err;
        }
    },
    async deleteCourse(id) {
        try {
            await courseSchema.deleteOne({ _id: id });
        } catch (err) {
            console.log(err);
            return err;
        }
    },
    async createCourse(data) {
        try {


            const { title, description, usersIds, price, image, quotes } = data;
            if (!title && description && price && image && quotes && usersIds) {
                throw new Error('data is required');
            }
            const objet = {
                ...data,
                price: parseInt(price),
                quotes: parseInt(quotes),
                image: 'hhtsasas',
            }
            const course = await courseSchema.create(objet);
            return course;

        } catch (err) {
            console.log(err)
            return err;
        }
    },
    async updateCourse(data, id) {
        try {
            const course = await courseSchema.updateOne({ _id: id }, data);
            return course;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
}

export default Course;