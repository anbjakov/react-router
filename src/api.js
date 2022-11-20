export const API_URL = 'https://dummyjson.com';


export async function getUsers (){
    const response = await fetch(`${API_URL}/users`);
    const users = await response.json();
    return users
}
export async function getSingleUser (userId){
    const response = await fetch(`${API_URL}/users/${userId}`);
    const user = await response.json();
    return user
}



export const login = (credentials) => {
    return fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
    }).then((res) => res.json())
};

