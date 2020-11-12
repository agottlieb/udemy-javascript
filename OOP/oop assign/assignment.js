class Course {
    constructor (title, length, price) {
    this.title =title;
    this.length = length;
    this.price= price;}
}

class CourseList {
    courses = [
        new Course ('Shakespeare', '5 hours', 40),
        new Course ('Western Medicine', '7 hours', 50)
    ]
}

console.log (CourseList);