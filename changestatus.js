import con from "../../db";

export default async (req, res)=> {

    const code = req.query.code;
    const status = req.query.dispstatus;
    console.log(status)

    let date = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

    switch(req.method){
        case "GET":
            console.log(code);

            if(status == "Active"){
                const sqlquery = await con.queryRunner(`update ishausertable2 set dispstatus= "Inactive" , dateupdated = "${date}"  where code = "${code}"`);
                // const ans = await queryRunner(sqlquery);
              
                    res.send(sqlquery)
                    break;
              
                // res.status(200).send("ans");
              }
              if(status == "Inactive"){
                const sqlquery =await con.queryRunner(`update ishausertable2 set dispstatus= "Active" , dateupdated = "${date}"  where code = "${code}"`) ;

                
                res.send(sqlquery)
                break;
                // const ans = await queryRunner(sqlquery);
               
                // res.status(200).send("ans");
              }  // 



           
            // break;
            
        default:
            break;
    }
    
}
