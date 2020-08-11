let users = [
    { id: "1", firstnamename: "Teszt1", lastname: "Feri1", email: "valami@valami.com" },
    { id: "2", firstnamename: "Teszt2", lastname: "Feri2", email: "valami@valami.com" },
    { id: "3", firstnamename: "Teszt3", lastname: "Feri3", email: "valami@valami.com" }
];

document.addEventListener("DOMContentLoaded", function (event) {
    // ez azert kell, mert a tablazat DOM element kesobb toltodik be, mint a js file


    //csak az elso oszlopban a sorok sorszama jon letre, az alapjan ahanz elem van a users objektumban
    /* let tableBody = document.querySelector("#userTable tbody");
    for (let k in users) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML=parseInt(k)+1;
        tr.appendChild(td);
        tableBody.appendChild(tr);
    } 
    */


    // kiirja a tablazatot -oszlopok, sorok - a users objectum alapjan
    /*     let tableBody = document.querySelector("#userTable tbody");
        let createTD = (html, parent) => {
        let td = document.createElement("td");
        td.innerHTML = html;
        parent.appendChild(td);
        };
        for (let k in users) {
            let tr = document.createElement("tr");
            createTD(parseInt(k) + 1, tr);
            for (let value of Object.values(users[k])) {
                createTD(value, tr);
            };
            tableBody.appendChild(tr);
        } */


    // kiirja a tablazatot -oszlopok, sorok - a users objectum alapjan
    /* let table = document.querySelector("#userTable tbody");
    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement("tr");
        for (let data of Object.values(users[i])) {
            let td = document.createElement("td");
            td.innerHTML = data;
            tr.appendChild(td);
        }
        table.appendChild(tr); 
    }*/
    /* A helyes táblázathoz két egymásba ágyazott ciklus kell. Az egyikben létrehozod a sorokat, 
    a másikban a cellákat a sorokon belül. Amikor elkészíted a fenti példát a saját gépeden, 
    használd a Google Chrome beépített debug eszközét ahogy tanultuk. 
    Állítsd meg minden sorban a ciklusokat és nézd végig a változók pillanatnyi értékét. */







    // kiirja a tablazatot -oszlopok, sorok - a users objectum alapjan
    let tableBody = document.querySelector("#userTable tbody");
    let createTD = (html, parent) => {
        let td = document.createElement("td");
        td.innerHTML = html;
        parent.appendChild(td);
    };

    // gombok letrehozasa
    let createButtonGroup = parent => {
        let group = document.createElement("div");
        group.className = "btn-group";
        //elso gomb
        let btnInfo = document.createElement("button");
        btnInfo.className = "btn-info btn";
        btnInfo.innerHTML = '<i class="fas fa-sync-alt"></i>';
        //masodik gomb
        let btnDanger = document.createElement("button");
        btnDanger.className = "btn-danger btn";
        btnDanger.innerHTML = '<i class="fas fa-trash-alt"></i>';
        //gombok hozzaadasa a grouphoz
        group.appendChild(btnInfo);
        group.appendChild(btnDanger);
        //td letrehozasa es hozzadava a gombhoz es a szulohoz
        let td = document.createElement("td");
        td.appendChild(group);
        parent.appendChild(td);
    }


    for (let k in users) {
        let tr = document.createElement("tr");
        createTD(parseInt(k) + 1, tr);
        for (let value of Object.values(users[k])) {
            createTD(value, tr);
        };
        createButtonGroup(tr);
        tableBody.appendChild(tr);
    }


}) // ez a 7. sor lezarasa