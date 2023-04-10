import con from "../../db";
export default async (req, res)=> {
    switch(req.method){
        case "GET":
            console.log("in server")
        const code = req.query.code;
        console.log(code);
        
        const sqlQuery = `select * from ishausertable2
        where code = "${code}"`
        // const ans = await queryRunner(sqlQuery);
        const query= await con.queryRunner(sqlQuery);

            res.send(query)
            break;
        default:
            break;
    }
    
}
