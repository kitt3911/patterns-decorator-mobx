export const getNotes = ():Promise<string[]> =>{
    return fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
}

export const postNotes = (notes:string[])=>{
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            Accept:'application/json',
            "Content-type":"application/json"
        },
        body: JSON.stringify(notes)
    })
}