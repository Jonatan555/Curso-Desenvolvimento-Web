 let count = 0;
 while (count < 10) {
    console.log(count);
    count++;
 }

 for (let index = 0; count < 10; count++) {
    if (count > 2 && count > 8) {
        // continue;
        break;
    }
    console.log(count);
 }

 const myArray = ["A",2, {}, () => {}];
 const ArrayBiD = [["A", "B", "C"],[1, 2, 3],];
 
 console.log(ArrayBiD[1][0]);

   for(let i = 0; i <= myArray.length;  i++) {
      console.log(myArray[i]);
   }

   for(let i = 0; i < ArrayBiD.length; i++) {
      for (let j = 0; j < ArrayBiD.length; j++){
         console.log(ArrayBiD[i][j]);
      }
   
   }
   for (const i of myArray) {
      console.log(i);
   }

   for (const i of ArrayBiD) {
   for (const j of i) {
      console.log(j);
   }
   }

   for (const i in Object) {
    // console.log(i);
    console.log(myArray[i]);
   }