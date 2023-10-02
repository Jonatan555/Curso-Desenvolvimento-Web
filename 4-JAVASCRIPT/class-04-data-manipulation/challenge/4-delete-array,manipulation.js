function deleterElementArray(element, array) {
  const index = array.indexof(element)
 index != -1 ? array.splice(index, 1) :"";
    return array;
}

const teche = ["HTML", 10, "CSS", 20, "JavaSscript", 30]

console.log(deleterElementArray("HTML  aedd", techs));