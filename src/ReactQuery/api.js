export const fetchApi = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;

}


export const postApi = async (data) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data)
    });

    return res.json();
}