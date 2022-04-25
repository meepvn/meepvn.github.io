const ulElement = document.querySelector('user-list');

const getAllUsers = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await res.json();
    return result;
}

const renderUsers = async() =>{
    const users = await getAllUsers();
    ulElement.innerHTML = users.map(user=>`<h1>${user.name}</h1>`).join('');
}

renderUsers();