//get data from json file, from server
function getServerData(url) {
    let fetchOptions = {
        methode: "GET",
        mode: "cors",
        cache: "no-cache",
    };

    return fetch(url, fetchOptions).then(
        response => response.json(),
        err => console.error(err)
    );
}

document.querySelector("#getDataBtn").addEventListener("click", function () {
    getServerData("http://localhost:3000/users").then(
        data => fillDataTable(data, "userTable")
    );
});


function fillDataTable(data, tableID) {
    let table = document.querySelector(`#${tableID}`);
    if (!table) {
        console.log(`Table "${tableID}" nem talalhato`);
        return;
    }   

    let tBody = table.querySelector("tbody");
    for (let row of data) {
         let tr = createAnyElement("tr");
        for (let k in row) {
            let td = createAnyElement("td");
            td.innerHTML = row[k];
            tr.appendChild(td);
        }
        tBody.appendChild(tr);
    }

}

function createAnyElement(name, attributes) {
    let element = document.createElement(name);
    for (let k in attributes) {
        element.setAttribute(k, attributes[k]);
    }
    return element;
}













//kiirja konzolra a users objektumot
/* function getServerData(url) {
    let fetchOptions = {
        methode: "GET",
        mode: "cors",
        cache: "no-cache",
    }
fetch(url, fetchOptions).then (
    response => response.json(),
    error => console.error(err)
).then (
    data => console.log(data)
);
}
getServerData("http://localhost:3000/users") */