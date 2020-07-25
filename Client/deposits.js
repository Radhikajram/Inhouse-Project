//const { response } = require("express");

document.addEventListener('DOMContentLoaded',function() {
    fetch('http://localhost:3000/getAll')
    .then (response => response.json())
    .then(data => loadHTMLTable(data['data']));

        

});

function loadHTMLTable(data)
{

    const table = document.querySelector('table tbody')
    if (data.length === 0)
    {
        table.innerHTML = "<tr><td class='no-data' colspan=9> No data </td></tr>";
        return;
    }

    let tableHtml = "";
    data.forEach(function ({ID,Category,First_Name,Second_Name,Deposit_Amount,Renewed_Amount,Deposit_Date,Maturity_Date,deposit_number,Email,phone}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${ID}</td>`;
        tableHtml += `<td>${Category}</td>`;
        tableHtml += `<td>${First_Name}</td>`;
        tableHtml += `<td>${Second_Name}</td>`;
        tableHtml += `<td>${Deposit_Amount}</td>`;
        tableHtml += `<td>${Renewed_Amount}</td>`;
        tableHtml += `<td>${new Date(Deposit_Date).toLocaleDateString()}</td>`;
        tableHtml += `<td>${new Date(Maturity_Date).toLocaleDateString()}</td>`;
        tableHtml += `<td>${deposit_number}</td>`;      
        tableHtml += `<td>${Email}</td>`;
        tableHtml += `<td>${phone}</td>`;




      //  tableHtml += `<td>${depositNumber}</td>`;
        tableHtml += `<td><button class="delete-row-btn" data-id=${ID}>Delete</td>`;
        tableHtml += `<td><button class="edit-row-btn" data-id=${ID}>Edit</td>`;

        tableHtml += "</tr>";

    });
        table.innerHTML = tableHtml;
}
// Create new record

function AddDeposit()
{
  window.open("depositadd.html",'_self',false)
}
// go back 
function goBack() {
    window.history.back();
    return false;
  }

function deleteRowById(id) {
  console.log(id);
    fetch('http://localhost:3000/delete/' + id)
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        }
    });
  }

  
  function handleEditRow(id) {
    console.log(id);
      fetch('http://localhost:3000/get/' + id)
      .then(response => response.json())
      .then(data => DisplayEditRecord(data['data']));

  }
  function DisplayEditRecord(data)
  {
    //  console.log(' in Edit section');
     // console.log(data);
  }
  

    
// Delete  
  document.querySelector('table tbody').addEventListener('click', function(event) {
    if (event.target.className === "delete-row-btn") {
        deleteRowById(event.target.dataset.id);
    }
// Update 
    if (event.target.className === "edit-row-btn") {
  //    handleEditRow(event.target.dataset.id);
      value = event.target.dataset.id;
      localStorage.setItem('id',value);
      window.document.location = './depositedit.html'
   //   window.open("depositedit.html?id"=+value,'_self',false)

    }
});



