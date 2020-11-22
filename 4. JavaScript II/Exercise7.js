function generateTable() {
    var style = document.createElement("style");
    style.appendChild(document.createTextNode('table, th, td { border: 0.5 px solid black; } table { width: 100 % ; } th { text - align: center; }'));
    document.head.appendChild(style);
    var table = document.createElement("table");
    table.style.borderWidth = "0.5 px";
    table.style.borderStyle = "solid"
    table.style.borderColor = "black";
    table.style.width = "100%";
    table.createCaption().textContent = "Table caption";
    headers = [
        "Evidence Rating", "Effect", "Efficacy", "Consensus", "Comments"
    ]
    var headerRow = table.insertRow();
    headers.forEach(header => {
        var th = document.createElement("th");
        th.style.borderWidth = "0.5 px";
        th.style.borderStyle = "solid"
        th.style.borderColor = "black";
        th.style.textAlign = "center;";
        var text = document.createTextNode(header);
        th.appendChild(text);
        headerRow.appendChild(th);
    });
    data = [
        ["A", "Power Output", "3 Stars", "80% 18 studies", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto blanditiis cumque doloribus, eius enim est exercitationem harum itaque iure iusto magni nam nobis? Alias aspernatur deleniti deserunt ea veniam!"],
        ["B", "Wieght", "4 Stars", "100% 65 studies", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad corporis cumque, dignissimos eaque excepturi fuga in ipsa laudantium mollitia obcaecati."]
    ]
    data.forEach(entry => {
        var row = table.insertRow();
        entry.forEach(field => {
            var td = document.createElement("td");
            td.style.borderWidth = "0.5 px";
            td.style.borderStyle = "solid"
            td.style.borderColor = "black";
            var text = document.createTextNode(field);
            td.appendChild(text);
            row.appendChild(td);
        })
    })
    document.body.append(table);
    button = document.createElement('button');
    button.innerHTML = "Swap";
    button.onclick = function() {
        var table = document.getElementsByTagName("table")[0];
        var firstRow = table.rows[1];
        var secondRow = table.rows[2];
        firstRow.parentNode.insertBefore(secondRow, firstRow);
    };
    document.body.append(button);
}
generateTable();