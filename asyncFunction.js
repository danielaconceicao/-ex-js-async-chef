/* async function fetchJson(url){
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
}  

const getPost = async (id) => {
    const post = await fetchJson(`https://dummyjson.com/posts/${id}`);
    const user = await fetch(`https://dummyjson.com/users/${post.userId}`);
    return  {...post, user};
}

(async() => {
    const post = await getPost(1);
    console.log(post);
})(); */


const getId = async(id) => {
    const post = await fetch(`https://dummyjson.com/posts/${id}`)
    const postFech = await post.json();

    const user = await fetch(`https://dummyjson.com/users/${postFech.userId}`);
    const userJson = await user.json()

    return {postFech, userJson}
}

(async() => {
    try{
        const post = await getId(1)
        console.log(post)
    }catch(err){console.error(err)}
   
})();