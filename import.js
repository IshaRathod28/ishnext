import con from "../../db";

export default async (req, res) => {
    const ans = req.body;
    let dateadded = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    let dateupdated = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    let endeffdt = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

    switch(req.method){
        case "POST":
    console.log(ans)
    ans.map(async (item) => {
        let code = item.code;
        // const ans = await queryRunner(`select * from ishausertable where code="${code}"`)
        let sql1= `select * from ishausertable2 where code="${code}"`
        let query1 = await con.queryRunner(sql1);
        
        // console.log(item, " ", ans)
        if (ans.length > 0) {
            const sql2 = `update ishausertable2 set firstname = "${item.firstname}", lastname = "${item.lastname}",email = "${item.email}", gender = "${item.gender}", hobbies = "${item.hobbies}", photo = "${item.photo}",country = "${item.country}", dispstatus = "${item.dispstatus}", dateupdated = "${item.updateddate}" where code="${item.code}"`
            // const ans = await queryRunner(sqlQuery);
            let query2 = await con.queryRunner(sql2);
        }
        else if (ans.length == 0) {
            let sql3 = `Insert into ishausertable2 (code,firstname,lastname,email,gender,hobbies,photo,country,status,dateadded,dateupdated,endeffdt,dispstatus) values("${item.code}","${item.firstname}","${item.lastname}","${item.email}","${item.gender}","${item.hobbies}","${item.photo}","${item.country}","${item.status}","${dateadded}","${dateupdated}","${endeffdt}","${item.dispstatus}")`;
            console.log(sql3)
            // const ans = await queryRunner(sqlQuery);
            let query3 = await con.queryRunner(sql3);

        }
    })
    res.status(200).send("data inserted successfully");

    break;
        default:
            break;
    }
    
};
