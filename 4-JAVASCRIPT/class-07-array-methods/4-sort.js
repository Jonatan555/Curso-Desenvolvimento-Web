 
    const arrayNumbers = [7, 4, 5, 7, 8, 9, "7", 40];

    const value = arrayNumbers.sort((a, b) => a -b);

    console.log(value.join("-"));
    console.log(arrayNumbers.join("-"));

    const arrayNames = ["Pedro", "Eduardo", "luiza"];


    arrayNames.sort((a, b) => a -b );
    arrayNames.sort((a, b) =>  {
        a = a.toUpperCase();
        b = b.toUpperCase();
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });

    arrayNames.sort((a,b) => a.localeCompare(b));
    arrayNames.sort((a,b) => String (a).localeCompare(b));

    console.log(arrayNames);
    console.log(arrayNumbers);

    const arrayAnimes = [
        {name:"Naruto", year: 1997},
        {name:"Dragon Ball", year: 1984},
        {name:"Cavaleiros do Zodiaco", year: 1986},
        {name:"Digimon", year: 1997},
        {name:"Jaspion", year: 1985},


    ];

    const sortedArrayAnimes = arrayAnimes.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    });
    
    
    

    console.table(sortedArrayAnimes);
    console.table(arrayAnimes.sort((a, b) => a.year - b.year));

    console.table(arrayAnimes);