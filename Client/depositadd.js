function goBack() {
    window.history.back();
    return false;
  }

  const addBtn = document.querySelector('#add-btn');

  addBtn.onclick = function()
  {
    // first Name
      const fName =  document.querySelector('#fname-input');

      const firstName = fName.value;
      fName.value = "";

      //second Name

      const sName =  document.querySelector('#sname-input');

      const secondName = sName.value;
      sName.value = "";
      
      // deposit Amount

      const dAmount =  document.querySelector('#Damount-input');

      const depositAmount = dAmount.value;
      dAmount.value = "";

      // Renewed Amount

      const rAmount =  document.querySelector('#Ramount-input');

      const renewedAmount = rAmount.value;
      rAmount.value = "";

      // Deposit Date

      const dDate =  document.querySelector('#Ddate-input');

      const depositDate = dDate.value;
      dDate.value = "";

      // Maturity Date

      const mDate =  document.querySelector('#Mdate-input');

      const maturityDate = mDate.value;
      mDate.value = "";
    
      // Deposit Number

      const dNumber =  document.querySelector('#Dnumber-input');

      const depositNumber = dNumber.value;
      dNumber.value = "";
    
      //  Email

      const emailValue =  document.querySelector('#email-input');

      const Email = emailValue.value;
      emailValue.value = "";
      
      // Phone

      const phoneValue =  document.querySelector('#phone-input');

      const Phone = phoneValue.value;
      phoneValue.value = "";
   

      fetch('http://localhost:3000/create', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ First_Name : firstName,Second_Name : secondName,
                               Deposit_Amount : depositAmount,Renewed_Amount : renewedAmount,
                               Deposit_Date: depositDate,Maturity_Date : maturityDate,
                               deposit_number : depositNumber,Email : Email,phone : Phone
                                        })
    })
    .then(response => response.json())
    .then(data => insertRowIntoTable(data['data']));

  }
  
  function insertRowIntoTable(data) {
    console.log(data);
  }