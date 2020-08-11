//get data from json file, from server
function getServerData(url) {
    let fetchOptions = {
        methode: "GET",
        mode: "cors",
        cache: "no-cache",
    };
    //ide a return kerult be
    return fetch(url, fetchOptions).then(
        response => response.json(),
        err => console.error(err)
    );
}

document.querySelector("#getDataBtn").addEventListener("click", function () {
    //igy mar egy masok fgv-be be lehet tenni a adatLekeres-t
    //es megkaphatjuk az adatokat a Promise then metodusaval
    getServerData("http://localhost:3000/users").then(
        //data=>console.log(data)
        data => fillDataTable(data, "userTable")
    );

});


// tablazatkitolto fgv
function fillDataTable(data, tableID) {
    let table = document.querySelector(`#${tableID}`);
    //hibakezeles
    if (!table) {
        console.log(`Table "${tableID}" nem talalhato`);
        return;
    }   




    let tBody = table.querySelector("tbody");
    // az adatasorokat kiolvasom a data tombbol
    for (let row of data) {
        //console.log(row);
  
        let tr = createAnyElement("tr");
        //bejarja az objektumokat kulcs ertek paronkent
        for (let k in row) {
            let td = createAnyElement("td");
            td.innerHTML = row[k];
            tr.appendChild(td);
        }
        tBody.appendChild(tr);
    }

}



// ezzel barmilyen html elemet le lehet gyartani
function createAnyElement(name, attributes) {
    let element = document.createElement(name);
    for (let k in attribures) {
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