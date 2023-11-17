
const repolist = document.getElementById("repolist");
const search = document.getElementById("search");

function searchRepo(){
    const username = document.getElementById("username").value;
    alert(username);
    fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json())
    .then((repos) =>{
        const tableRows = repos.map((repo) => `<tr>
           <td>${repo.name}</td> 
           <td>${repo.created_at}</td>
           <td><a href="${repo.url}">${repo.url}</a></td>  
        </tr>`
        ).join("");
        const tableContent =`
        <table class="table">
        <thead>
        <tr>
        <th>Repository Name</th>
        <th>Date Created At</th>
        <th>Repo URL</th>
        <tr>
        </thead>
        <tbody>
        ${tableRows}
        </tbody>
        </table>
        `;
        repolist.innerHTML= tableContent;
    })
        .catch((error)=> console.error("Sorry an error occured"))
    }

