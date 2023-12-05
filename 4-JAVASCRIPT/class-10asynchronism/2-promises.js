const URL ="https://api.github.com/users/Jonatan555"
 
  console.log("inicio");

    const gitHubUser = fetch(url)
    .then((request) => request.json())
    .then(({ name, bio }) => 
    console.log({
    name,
    bio,
    })
    ) 
    .catch((error) => console.error(error))
    .finally(() => console.log("Fim da requisição"));

    console.log(gitHubUser);
    console.log("Fim");

    