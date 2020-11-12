class Course {
    constructor (courseTitle, courseLength, coursePrice) {
    this.title =courseTitle;
    this.length = courseLength;
    this.price= coursePrice}

    value(courseLength, coursePrice) {

        const totalValue = courseLength/coursePrice
        console.log(totalValue);
    }
}

// class CourseList {
//     courses = [
//         new Course ('Shakespeare', '5 hours', 40),
//         new Course ('Western Medicine', '7 hours', 50)
//     ]
// }

const litCourse = new Course('Shakespeare', 5, 40);
const medCourse = new Course('Western Medicine', 6, 50);

console.log (litCourse);
console.log (medCourse);