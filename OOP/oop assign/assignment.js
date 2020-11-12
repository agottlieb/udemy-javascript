class Course {
    constructor (title, length, price) {
    this.title =title;
    this.length = length;
    this.price= price;}
}

class CourseList {
    courses = [
        new Course ('Shakespeare')
    ]
}