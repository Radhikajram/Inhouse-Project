const express = require('express');
const app = express();
//const app = connect().use(connect.static('public')).listen(3000, "0.0.0.0");
const cors = require('cors');
const dotenv = require('dotenv');
const { request, response } = require('express');
dotenv.config();

const dbService = require('./dbService');
const DbService = require('./dbService');

app.use(cors(

));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// create
app.post('/create', (request, response) => {
   const db = DbService.getDBServiceInstance();
    const firstName = request.body.First_Name;
    const secondName = request.body.Second_Name;
   const depositAmount = request.body.Deposit_Amount;
   const renewedAmount = request.body.Renewed_Amount;
    const depositDate = request.body.Deposit_Date;
    const maturityDate = request.body.Maturity_Date;
    const depositNumber = request.body.deposit_number;
    const email = request.body.Email;
    const phone = request.body.phone;
    const result = db.insertNewrecord(firstName,secondName,depositAmount,renewedAmount,depositDate,maturityDate,depositNumber,email,phone);

    result
    .then(data => response.json({data: data}))
    .catch(err => console.log(err))
})

// Read

app.get('/getAll',(request,response) => {
    const db = DbService.getDBServiceInstance();
    const result = db.getAllData();

    result
    .then(data => response.json({data: data}))
    .catch(err => console.log(err))
})
// get specific id
app.get('/get/:id',(request,response) => {
  //  console.log('get specific id' + request.params);
    const { id } = request.params;
    const db = DbService.getDBServiceInstance();
    const result = db.getById(id);

    result
    .then(data => response.json({data: data}))
    .catch(err => console.log(err))
})


// update
app.patch('/update', (request, response) => {
   // const { id, name } = request.body;
   console.log(request.body);
   const firstName = request.body.First_Name;
    const secondName = request.body.Second_Name;
   const depositAmount = request.body.Deposit_Amount;
   const renewedAmount = request.body.Renewed_Amount;
    const depositDate = request.body.Deposit_Date;
    const maturityDate = request.body.Maturity_Date;
    const depositNumber = request.body.deposit_number;
    const email = request.body.Email;
    const phone = request.body.phone;
    const id = request.body.ID;
    console.log(id);
    const db = DbService.getDBServiceInstance();
    const result = db.updateRecordById(firstName,secondName,depositAmount,renewedAmount,depositDate,maturityDate,depositNumber,email,phone,id);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});
// delete

app.delete('/delete/:id', (request, response) => {
    console.log('delete' + request.params);
    const { id } = request.params;
    const db = dbService.getDBServiceInstance();

    const result = db.deleteRowById(id);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

app.listen(process.env.PORT,() => console.log ('app is running'));