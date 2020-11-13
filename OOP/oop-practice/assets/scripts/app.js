class Tooltip {

}

class ProjectItem {
    constructor(task, description)
    finish () {    
    }
}

//putting in the logic to parse out which items go into which list
class ProjectList {
 constructor (type) {
    const projecItems = document.querySelectorAll(`#${type}-projects li`);
 }
}

class App {
    static init() { //static for functionality that belongs to the class as a whole/class level data, not bound to an instance
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('afinished');
    }
}    