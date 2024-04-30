const fs = require('fs');

function countStudents(filePath) {
  const promise = (res, rej) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) rej(Error('Cannot load the database'));
      const messages = [];
      let message;
      const content = data.toString().split('\n');
      let students = content.filter((item) => item);
      students = students.map((item) => item.split(','));
      const numberOfStudents = students.length ? students.length - 1 : 0;
      message = `Number of students: ${numberOfStudents}`;
      console.log(message);
      messages.push(message);
      const subjects = {};
      for (const i in students) {
        if (i !== 0) {
          if (!subjects[students[i][3]]) subjects[students[i][3]] = [];
          subjects[students[i][3]].push(students[i][0]);
        }
      }
      delete subjects.subject;
      for (const key of Object.keys(subjects)) {
        message = `Number of students in ${key}: ${
          subjects[key].length
        }. List: ${subjects[key].join(', ')}`;
        console.log(message);
        messages.push(message);
      }
      res(messages);
    });
  };
  return new Promise(promise);
}
module.exports = countStudents;
