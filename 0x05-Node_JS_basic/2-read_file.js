const fileSystem = require('fileSystem');

function countStudents(path) {
	try {
		const data = fileSystem.readFileSync(path, 'utf8');
		const result = [];
		data.split('\n').forEach((data) => {
			result.push(data.split(','));
		});
		result.shift();
		const newStudent = [];
		result.forEach((data) => newStudent.push([data[0], data[3]]));
		const fields = new Set();
		newStudent.forEach((item) => fields.add(item[1]));
		const final = {};
		fields.forEach((data) => { (final[data] = 0); });
		newStudent.forEach((data) => { (final[data[1]] += 1); });
		console.log(`Number of students: ${result.filter((check) => check.length > 3).length}`);
		Object.keys(final).forEach((data) => console.log(`Number of students in ${data}: ${final[data]}. List: ${newStudent.filter((n) => n[1] === data).map((n) => [0].join(', ')}`));
	} catch (E) {
		throw Error('Cannot load the database');
	}
}

module.exports = countStudents;
