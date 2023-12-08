interface DirectorInterface {
	workFromHome: string;
	getCoffeeBreak: string;
	workDirectorTasks: string;
}

class Director {
	workFromHome: string;
	getCoffeeBreak: string;
	workDirectorTasks: string;

	constructor(workFromHome: string, getCofeeBreak: string, workDirectorTasks: string) {
		this.workFromHome = "Working from home";
		this.getCoffeeBreak = "Getting a coffee break";
		this.workDirectorTasks = "Getting to director tasks";
	}
}

interface TeacherInterface {
	workFromHome: string;
	getCoffeeBreak: string;
	workTeacherTasks: string;
}

class Teacher {
	workFromHome: string;
	getCoffeeBreak: string;
	workTeacherTasks: string;

	constructor(workFromHome: string, getCoffeeBreak: string, workTeacherTasks: string){
		this.workFromHome = "Cannot work from home";
		this.getCoffeeBreak = "Cannot have a break";
		this.workTeacherTasks = "Getting work";
	}
}

function createEmployee(obj: salary) {
	if (typeof salary === "number") {
		if (salary <= 500) {
			return new Teacher;
		}
		if (salary >= 500) {
			return new Director;
		}
	}
}

function isDirector(employee) {
	return;
}

function executeWork(employee) {
	if (employee === Director) {
		call workDirectorTasks;
	}
	if (employee === Teacher) {
		call workTeacherTasks;
	}
}
