//const { request } = require("express");

//const { func } = require("prop-types");


document.addEventListener('DOMContentLoaded',function() {
   const ID = localStorage.getItem('id');
    const idValue = parseInt(ID);
    console.log(localStorage.getItem('id'));
    fetch('http://localhost:3000/get/' + ID)
    .then(response => response.json())
    .then(data => DisplayEditRecord(data['data']));

});
function DisplayEditRecord(data)
{
    console.log(' in Edit section');
    console.log(data);

    // first Name
    const fName =  document.querySelector('#fname-input-edit');

    fName.value = data[0].First_Name;

    // Second Name

    const sName =  document.querySelector('#sname-input-edit');

    sName.value = data[0].Second_Name;

    // Deposit Amount 

    const dAmount =  document.querySelector('#Damount-input-edit');

    dAmount.value = data[0].Deposit_Amount;

    // Renewed Amount

    const rAmount =  document.querySelector('#Ramount-input-edit');

    rAmount.value = data[0].Renewed_Amount;

    // Deposit Date

    const dDate =  document.querySelector('#Ddate-input-edit');

    const formatedDate =  new Date(data[0].Deposit_Date).toLocaleDateString();
    
    const splitdDate = formatedDate.split('/');

    // format deposit-date for date

    if (splitdDate[1] < 10)
    {
        dateValue = `0${splitdDate[1]}`;
    }
    else
    {
        dateValue = splitdDate[1];
    }
    
    // format deposit-date for month 

    if (splitdDate[0] < 10)
    {
        monthValue = `0${splitdDate[0]}`;
    }
    else
    {
        monthValue = splitdDate[0];
    }
    outDate = `${splitdDate[2]}-${monthValue}-${dateValue}`;

    
    dDate.value = outDate;


    //Maturity date

    const rDate =  document.querySelector('#Mdate-input-edit');

    const formatedMaturityDate =  new Date(data[0].Maturity_Date).toLocaleDateString();
   
    const splitdMDate = formatedMaturityDate.split('/');

    // format maturity date for date

    if (splitdMDate[1] < 10)
    {
        dateMValue = `0${splitdMDate[1]}`;
    }
    else
    {
        dateMValue = splitdMDate[1];
    }
    
    // format maturity date for month
 
    if (splitdMDate[0] < 10)
    {
        monthMValue = `0${splitdMDate[0]}`;
    }
    else
    {
        monthMValue = splitdMDate[0];
    }
    outMDate = `${splitdMDate[2]}-${monthMValue}-${dateMValue}`;

    rDate.value = outMDate;


    // Deposit number

    
    const dNumber =  document.querySelector('#Dnumber-input-edit');

    dNumber.value = data[0].deposit_number;

    //Email

    
    const Email =  document.querySelector('#email-input-edit');

    Email.value = data[0].Email;

    // Phone 

    
    const Phone =  document.querySelector('#phone-input-edit');

    Phone.value = data[0].phone;
}

function goBack() {
    window.history.back();
    return false;
  }

const updateBtn = document.querySelector('#update-btn');

updateBtn.onclick = function()
  {

    const ID = localStorage.getItem('id');
    const idValue = parseInt(ID);
    console.log(idValue);
// first Name
const fName =  document.querySelector('#fname-input-edit');

const firstName = fName.value;
fName.value = "";

//second Name

const sName =  document.querySelector('#sname-input-edit');

const secondName = sName.value;
sName.value = "";

// deposit Amount

const dAmount =  document.querySelector('#Damount-input-edit');

const depositAmount = dAmount.value;
dAmount.value = "";

// Renewed Amount

const rAmount =  document.querySelector('#Ramount-input-edit');

const renewedAmount = rAmount.value;
rAmount.value = "";

// Deposit Date

const dDate =  document.querySelector('#Ddate-input-edit');

const depositDate = dDate.value;
dDate.value = "";

// Maturity Date

const mDate =  document.querySelector('#Mdate-input-edit');

const maturityDate = mDate.value;
mDate.value = "";

// Deposit Number

const dNumber =  document.querySelector('#Dnumber-input-edit');

const depositNumber = dNumber.value;
dNumber.value = "";

//  Email

const emailValue =  document.querySelector('#email-input-edit');

const Email = emailValue.value;
emailValue.value = "";

// Phone

const phoneValue =  document.querySelector('#phone-input-edit');

const Phone = phoneValue.value;
phoneValue.value = "";


fetch('http://localhost:3000/update', {
        method: 'PATCH',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({ ID:idValue,First_Name : firstName,Second_Name : secondName,
            Deposit_Amount : depositAmount,Renewed_Amount : renewedAmount,
            Deposit_Date: depositDate,Maturity_Date : maturityDate,
            deposit_number : depositNumber,Email : Email,phone : Phone
                     })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        }
    })
}
