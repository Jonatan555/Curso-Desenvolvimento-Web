const students = [
    { id: 1, name: "João", average: 6, birth: 2005 },
    { id: 2, name: "Thiago", average: 6, birth: 2002 },
    { id: 3, name: "Jonatan", average: 5, birth: 1998 },
    { id: 4, name: "Rosa", average: 9, birth: 2004 },
    { id: 5, name: "Amanda", average: 8, birth: 1992 },
    { id: 6, name: "Pedro", average: 7, birth: 1998 },
  ];

  console.log(students.find((value) => {
    return value.id === 6 || value.id === 5
  }));

  console.log(students.find((value) => {
 return value.name === "Jonatan" && value.name === "Rosa"
  }));

  console.log(students.find((value) => {
 return value.name === "Pedro" && value.birth > 1998
  }));

  console.log(students.find(value => value.average >= 7));

  console.log(students.filter(value => value.average >= 7));
 
  const currentYear = new Date().getFullYear();
  console.log(currentYear);

console.log(students.filter((value) => currentYear - value.birth >= 18));

  console.log(students);
 
    const username = prompt("Digite seu nome")

  console.log(students.filter(value => value.name.includes("a")));