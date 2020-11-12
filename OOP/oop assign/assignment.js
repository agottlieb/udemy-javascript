class Course {
    constructor (courseTitle, courseLength, coursePrice) {
    this.title =courseTitle;
    this.length = courseLength;
    this.price= coursePrice 
}

    value() {
        return this.length/this._price
    }
    summary() {
        console.log(`The name is ${this.title}`)
    }

    set price (priceValue) {
        if (priceValue < 0) {
           throw 'Invalid value'
        }
        this.#price = priceValue; //# makes it a private property, can only be accessed inside class
    }

    get price () {  
        return '$' + this._price
    }
}

class PracticalCourse extends Course {
    constructor (title, length, price, exercisesCount) {
        super(title, length, price); //super executes the arguments from the parent class constructor
        this.numberOfExercises = exercisesCount; //new function
    }
}

class TheoryCourse extends Course {
    //don't need to add constructor if keeping all the properties
    // constructor (title, length, price) {
    //     super(title, length, price);
    // }
    publish () {
        console.log('Publishing')
    }
}

const litCourse = new Course('Shakespeare', 5, 40);
const medCourse = new Course('Western Medicine', 6, 50);
const mathCourse = new PracticalCourse ('Math for Dummies', 8, 70, 100);
const philCourse = new TheoryCourse ('Ethics', 3, 15);

console.log (litCourse);
console.log (medCourse);
console.log (mathCourse);
console.log (philCourse);

console.log(litCourse.value());
console.log(litCourse.summary())
console.log (philCourse.publish());