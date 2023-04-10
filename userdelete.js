import con from "../../db";
export default async (req, res)=> {
    switch(req.method){
        case "DELETE":
            const code = req.query.code;
            const sqlquery = `update ishausertable2 set status= "i" where code = "${code}"`
        // const ans = await queryRunner(sqlQuery);
        const query= await con.queryRunner(sqlquery);

            res.send(query)
            break;
        default:
            break;
    }
    
}
