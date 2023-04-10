import con from "../../db";
export default async (req, res)=> {
    const code = req.body.code;
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const gender = req.body.gender;
        const hobbies = req.body.hobbies;
        const photo = req.body.photo;
        const country = req.body.country;
    
        const dispstatus = req.body.dispstatus;
        let updateddate = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    switch(req.method){

        
    
        case "POST":
            const sqlQuery = `update ishausertable2 set firstname = "${firstname}", lastname = "${lastname}",email = "${email}", gender = "${gender}", hobbies = "${hobbies}", photo = "${photo}",country = "${country}", dispstatus = "${dispstatus}", dateupdated = "${updateddate}" where code="${code}"`
        // const ans = await queryRunner(sqlQuery);
        const query= await con.queryRunner(sqlQuery);
            res.send(query)
            break;
        default:
            break;
    }
    
}
