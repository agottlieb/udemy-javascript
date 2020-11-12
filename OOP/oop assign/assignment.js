class Course {
    constructor (courseTitle, courseLength, coursePrice) {
    this.title =courseTitle;
    this.length = courseLength;
    this.price= coursePrice 
}

    value() {
        return this.length/this.price
    }
    summary() {
        console.log(`The name is ${this.title}`)
    }
}

const litCourse = new Course('Shakespeare', 5, 40);
const medCourse = new Course('Western Medicine', 6, 50);

console.log (litCourse);
console.log (medCourse);

console.log(litCourse.value());
console.log(litCourse.summary())