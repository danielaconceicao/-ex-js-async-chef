async function fetchRicetta(url){
    try{
        const res = await fetch(url);
        if(!res.ok) throw Error('Error na requisicao')
        const obj = await res.json();
        return obj;
    }catch(err){console.error(`${err}`)}
    
}

const birthdayChef = async (id) => {
    const ricetta = await fetchRicetta(`https://dummyjson.com/recipes/${id}`)
    const userId = await fetchRicetta(`https://dummyjson.com/users/${ricetta.userId}`)
    return userId.birthDate
}

birthdayChef(2)
    .then(birthDate => console.log(`Data di nascita dello chef: ${birthDate}`))
.catch(err => console.error(err))