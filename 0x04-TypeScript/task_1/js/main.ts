interface Teacher {
	firstName: string,
	lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperience: number,
	location: string,
	contract: boolean,
}

const teacher: Teacher = {
	firstName: "John",
	lastName: "Doe",
	location: "Nairobi",
	contract: "false",
	fullTimeEmployee: false,
};

console.log(teacher);
