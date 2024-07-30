//Buscar os links salvos

export function getLinksSave(key){
    try {
        const myLinks = localStorage.getItem(key)
        let linksSaves = JSON.parse(myLinks) || [];

        return linksSaves;
    } catch (error){
        console.error("Erro ao obter os dados do JSON", error)
        return [];
    }
    
}

//Salvar um link no Storage

export async function saveLink(key, newLink){
    let linkStored = await getLinksSave(key);

    const hasLink = linkStored.some(link => link.id === newLink.id)

    if(hasLink){
        console.log("Esse link já existe")
        return;
    }

    linkStored.push(newLink);
    localStorage.setItem(key, JSON.stringify(linkStored));
    console.log("Link adicionado com sucesso!");
}


//Deletar um link salvo

export function deleteLink(links, id){
    let myLinks = links.filter( item => {
        return(item.id !== id);
    })

    localStorage.setItem('@EncurtaLink', JSON.stringify(myLinks))

    return myLinks;
}