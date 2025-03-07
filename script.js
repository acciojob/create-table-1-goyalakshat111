function insert_Row() {
  //Write your code here
  let table = document.getElementById("sampleTable");

  let row = document.createElement("tr");
  let cell1 = document.createElement("td");
  let cell2 = document.createElement("td");
  cell1.innerText = "New Cell1";
  cell2.innerText = "New Cell2";
  cell1.style.border = "solid 2px black";
  cell2.style.border = "solid 2px black";
  row.append(cell1, cell2)
  table.insertBefore(row, table.rows[0]);

}
