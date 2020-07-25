const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
let instance = null ;

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT


})

connection.connect((err) => {
    if(err) {
        console.log(err.message);

    }

        console.log('db' + connection.state)

    
});

class DbService {
    static getDBServiceInstance()
    {
        return instance ? instance : new DbService();
    }


async getAllData(){
    try {
        const response = await new Promise((resolve,reject) => 
        {
            const query = "SELECT * FROM DEPOSIT_DETAILS;";
            connection.query(query,(err,results) =>
            {
                if (err) reject(new Error(message));
                resolve(results);

            })
        });
        return response;
    }catch(error)
    {
        console.log(error);
    }
}
async insertNewrecord(firstName,secondName,depositAmount,renewedAmount,depositDate,maturityDate,depositNumber,email,phone)
{
        try {
            const category = 'FD';
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO deposit_details (Category,First_Name,Second_Name,Deposit_Amount,Renewed_Amount,Deposit_Date,Maturity_Date,deposit_number,Email,phone) VALUES(?,?,?,?,?,?,?,?,?,?);";
                connection.query(query, [category,firstName,secondName,depositAmount,renewedAmount,depositDate,maturityDate,depositNumber,email,phone] , (err, result) => {

//                connection.query(query, [category,firstName,secondName,depositAmount,renewedAmount,depositNumber,email,phone] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            return {
                id : insertId

            

            };
        } catch (error) {
            console.log(error);
        }
    }


    async deleteRowById(id) {
        try {
            id = parseInt(id, 10); 
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM deposit_details WHERE id = ?";
    
                connection.query(query, [id] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                })
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getById(id) 
    {
        try {
            id = parseInt(id,10);
      //      console.log(id)
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM deposit_details WHERE id = ?";
    
                connection.query(query, [id] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result);
                });
            });
            return response;
        }catch(error)
        {
            console.log(error);
        }
    }

    async updateRecordById(firstName,secondName,depositAmount,renewedAmount,depositDate,maturityDate,depositNumber,email,phone,id)
    {
        try {
            id = parseInt(id, 10); 
            console.log(id);    
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE deposit_details SET First_Name = ?,Second_Name = ?,Deposit_Amount = ?,Renewed_Amount = ?,Deposit_Date = ?,Maturity_Date = ?,deposit_number = ?,Email = ?,phone=? WHERE ID = ?";
    
                connection.query(query, [firstName,secondName,depositAmount,renewedAmount,depositDate,maturityDate,depositNumber,email,phone,id] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                })
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    

}
module.exports = DbService