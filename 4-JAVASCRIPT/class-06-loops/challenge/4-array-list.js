        const listitens = [];

        while (true) {
            const menuOption = prompt(`
            Digite a opçao desejada
            1 - Cadastrar item
            2 - Ver itens cadastrados 
            3 - Remover item cadastrado
            4 - Sair programa


    `);
        if (menuOption === "4" || menuOption === null ) {
            break;
        } 
        if (menuOption === "") {
            alert("por favor escolha uma das opçoes");
            continue;
        }
        
        switch (menuOption) {
            case "1":
            console.log("opçao 1");
            while (true) {
                let additem = prompt("Digite o nome do item para adicionar:")

                if (additem === null) {
                    break;
                }

                additem = additem.trim().split("").filter(Boolean).join("")
                
                console.log(additem);

                if (additem === "") {
                    alert("por favor, digite um nome para cadastrar");
                    continue;
                }

                if (listitens.includes(additem)) {
                alert("Item ja cadastrado");
                } else {
                    listitens.push(additem);
                    alert(`"${additem}" cadastrado(a) com sucesso`)
                }
            }


            break;
            case "2":
                console.log("opçao 2");
                if (listitens.length === 0){
                    alert("lista vazia!");
                } else{
                    alert(listitens.join("-"))
                }

                break;

            case "3":
                console.log("opçao 3");
                console.log(listitens);
                if (listitens.length === 1) {
                    const removedItemName = listitens.pop()
                    alert(`${removedItemName} foi removido com sucesso!`)
                    break; 
                } 

                while (true) {
                    if (listitens.length === 0){
                        alert("lista vazia!");
                        break;
                    } else {
                        let ItemNameToRemove = prompt("Digite o nome para remover:")

                        if (ItemNameToRemove === null) break;

                        ItemNameToRemove = ItemNameToRemove.trim().split("").filter(Boolean).join("")

                        if (ItemNameToRemove === "") {
                            alert("por favor ,inserirnome para remover");
                            continue;
                        }

                        if (listitens.includes(ItemNameToRemove)) {
                            listitens.splice( listitens.indexOf(ItemNameToRemove), 1)
                            alert(`${ItemNameToRemove} foi removido com sucesso`)
                        } else {
                            alert("Item nao encontrado")
                        }
                    }
                }


                break;
                
                default:
                alert("opçao invalida");
        }
        
        }
        alert("programa encerrado");