import con from "../../db";

export default async (req, res) => {

    
    switch(req.method){

        case "GET":
          
            const searchvalue = req.query.searchdata;
            const hobbies = req.query.hobbies;
            const gender = req.query.gender;
            console.log(req.query);
            const dispstatus = req.query.dispstatus;
    
            let sqlquery = ``;
            if (searchvalue != "" && searchvalue) {
                sqlquery = sqlquery + ` where code like "%${searchvalue}%" or firstname like "%${searchvalue}%"  or lastname like "%${searchvalue}%" or email like "%${searchvalue}%"`
            }
            if (hobbies != "" && hobbies) {
                if (sqlquery == "") {
                    sqlquery = sqlquery + ` where hobbies like "%${hobbies}%"`
                } else {
                    sqlquery = sqlquery + ` and hobbies  like "%${hobbies}%"  `
                }
            }
            if (gender != "" && gender) {
                if (sqlquery == "") {
                    sqlquery = sqlquery + ` where gender = "${gender}" `
                } else {
                    sqlquery = sqlquery + ` and gender = "${gender}"  `
                }
    
            }
            if (dispstatus != "" && dispstatus) {
                if (sqlquery == "") {
                    sqlquery = sqlquery + ` where dispstatus = "${dispstatus}" `
                } else {
                    sqlquery = sqlquery + ` and dispstatus = "${dispstatus}"  `
                }
    
            }
            let sqlquery2 = `select * from ishausertable2  ` + sqlquery;
            console.log(sqlquery2)
            // const ans = await queryRunner(sqlquery2);
            let query = await con.queryRunner(sqlquery2);
            res.send(query)
            break;
        default:
            break;
    }
    
}




















