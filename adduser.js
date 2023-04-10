import con from "../../db";

import moment from "moment/moment";
export default async (req, res) => {
    
    console.log(req.body);
   
    const code = req.body.code;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const gender = req.body.gender;
    const hobbies = req.body.hobbies;
    const photo = req.body.photo;
    const country = req.body.country;
    // const dateadded =  new Date().toISOString.slice(0,10);

    let dateadded = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    let dateupdated = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    let endeffdt = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    switch(req.method){
        case "POST":
            let query = await con.queryRunner( `insert into ishausertable2 (code,firstname,lastname,email,gender,hobbies,photo,country,dateadded,dateupdated,endeffdt,status) 
            value("${code}","${firstname}","${lastname}","${email}","${gender}","${hobbies}","${photo}","${country}","${dateadded}","${dateupdated}","${endeffdt}","A")`);
            res.send(query)
            break;
        default:
            break;
    }
    
};
