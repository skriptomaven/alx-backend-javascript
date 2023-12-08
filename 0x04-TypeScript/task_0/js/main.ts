interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string
}

const firstStudent: Student = {
	firstName: "John",
	lastName: "Doe",
	age: 20,
	location: "Nairobi"
}

const secondStudent: Student = {
	firstName: "Jane",
	lastName: "Doe",
	age: 21,
	location: "Siaya"
}

const studentList: Array[] = [firstStudent, secondStudent];

const body: HTMLBodyElement = document.getElementbyTagName("body")[0];
