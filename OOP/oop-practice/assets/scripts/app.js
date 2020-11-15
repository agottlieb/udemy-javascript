class Tooltip {

}

class ProjectItem {
    constructor(id){
        this.id = id;   
        this.connectSwitchButton(); 
        this.connectMoreInfoButton();
    }

    connectMoreInfoButton() {
    }
    connectSwitchButton () {
        const projectItemElement = document.getElementById(this.id);
        const switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn.addEventListener('click', this.updateProjectListsHandler);
    }
}

//putting in the logic to parse out which items go into which list
class ProjectList {
    projects = []; //gets converted into properties 
     
  constructor (type) { //constructor differentiates by type
    const projectItems = document.querySelectorAll(`#${type}-projects li`); //CSS selector
    for (const projectItem of projectItems) {
        this.projects.push(
            new ProjectItem(projectItem.id)); //accesses id attribute, JS representation of the id attribute
    }
    console.log(this.projects);
 }

    addProject() {}

    switchProject(projectId) {
        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id !== projectId);
    }
}

class App {
    static init() { //static for functionality that belongs to the class as a whole/class level data, not bound to an instance
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('afinished');
    }
}    