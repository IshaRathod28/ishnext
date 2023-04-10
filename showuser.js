import con from "../../db";
export default async (req, res)=> {
    switch(req.method){
        case "GET":
            
            const sqlQuery = `select * from ishausertable2 where status = "a" `
            // const ans = await queryRunner(sqlQuery);
            
            let query = await con.queryRunner(sqlQuery);


            res.send(query)
            break;
        default:
            break;
    }
    
}
