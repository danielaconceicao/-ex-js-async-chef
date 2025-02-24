async function fetchRicetta(url) {
    const res = await fetch(url);
    if (!res.ok) throw Error('Error na requisicao')
    const obj = await res.json();
    return obj;
}

const birthdayChef = async (id) => {
    let ricetta;
    try {
        ricetta = await fetchRicetta(`https://dummyjson.com/recipes/${id}`)
    } catch (err) { console.error(err); throw new Error(`Non recupero la ricetta id: ${id}`) }

    if (ricetta.message) throw new Error('recipe.message');

    let chef;
    try {
        chef = await fetchRicetta(`https://dummyjson.com/users/${ricetta.userId}`)
    } catch (err) { console.error(err); throw new Error(`Non recupero lo chef id: ${id}`) }

    if (chef.message) throw new Error(`Chef con id: ${id}, non trovato!`)
    const formatteDate = dayjs(chef.birthDate).format('DD/MM/YYYY')

    return formatteDate
}

birthdayChef(3)
    .then(birthDate => console.log(`Data di nascita dello chef: ${birthDate}`))
    .catch(err => console.error(err)) 