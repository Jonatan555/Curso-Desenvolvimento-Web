        const array = ["Matrix", "IT", "ET", "JumanJi","Barbie"];

        console.log(array);

        const arrayForEach  = array.forEach((value, index, array) => {
        // array[index] = "A";
            return {value, index, array}
        })

            console.log(arrayForEach);
        
            const arrayMap = array.map((value, index,array) => {
            return {value, index, array}
        })

        console.log(array);
        console.log(arrayMap);

        const dollar = [1, 2, 3000, 40, 50];

        const realConverted = dollar.map(value => value * 5.05);



        console.log(dollar);
        console.log(realConverted);
        
        const rectangles = [
            { width: 4, height: 5},
            {width: 7, height: 10},
            {width: 14, height:7},
        ];

        const calculateAreas = rectangles.map((value, index)=>{
            return {
            name: `Retangulo ${index + 1}`,
            area: value.width * value.height,
            };
        } );

        console.log(calculateAreas);
        console.log(calculateAreas);
        document.write(JSON.stringify(calculateAreas))