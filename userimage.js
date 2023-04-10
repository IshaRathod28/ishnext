import con from "../../db";
export default async (req, res)=> {
    const file = req.files.file;
    const filename = file.name;
    console.log(filename)
    switch(req.method){
        case "POST":
            file.mv(`C:/Users/T2-160/Documents/rough/USER_MANAGEMENT/client/public/images/${filename}`, (err) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send({ message: "File upload failed" });
                }
                res.status(200).send({ message: `C:/Users/T2-160/Documents/rough/USER_MANAGEMENT/client/public/images/${filename}`, code: 200 });
            });

       
            break;
        default:
            break;
    }
    
}
