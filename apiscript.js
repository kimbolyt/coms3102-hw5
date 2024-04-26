// Call api to get data
// link: https://randomuser.me/api/?results=5
// Show first name and city in a table that lies in index.html

fetch('https://randomuser.me/api/?results=5').then(response => {
    // console.log(response.json());
    return response.json();
}).then(data => {
    let tableData = "";
    data.results.map((user) => {
        tableData += `<tr>
                <td>${user.name.first}</td>
                <td>${user.location.city}</td>
                </tr>`;
    })
    document.getElementById('table-body').innerHTML = tableData;
}).catch(error => {
    console.log(error);
})