import con from "../../db";
export default async (req, res)=> {
    switch(req.method){
        case "GET":
            const sort = req.query.sort;
        console.log(sort)
        const sqlquery = `select * from ishausertable2 order by ${sort}`
        console.log("query", sqlquery)
        // const ans = await queryRunner(sqlQuery);
        const query= await con.queryRunner(sqlquery);

            res.send(query)
            break;
        default:
            break;
    }
    
}
