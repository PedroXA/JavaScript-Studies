// fetch('./data/pessoas.json')
//     .then(response => response.json())
//     .then(json => loadElementsOnScreen(json));

axios('./data/pessoas.json')
.then(response => loadElementsOnScreen(response.data))

function loadElementsOnScreen(json){
    const table = document.createElement('table');
    table.className = "table-warning";


    json.forEach(person => {
        const tr = document.createElement('tr');

        Object.values(person).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value
            tr.appendChild(td);
            table.appendChild(tr);
        })
    });

    document.querySelector('.container').appendChild(table);
}

