

const Student = require('../models/student');


const register = async (req,res,next) =>{

        console.log(req.body);
        // res.json({
        //    body: req.body
        // })
        const {branch, reg_id, name, phone, hashedPassword, rollno, Aclubs, email} = req.body;
        const clubs = JSON.stringify(Aclubs);

        // Student.create ( {
        //         branch: req.body.branch,
            
        //         reg_id: req.body.reg_id,
            
        //         name: req.body.name,
            
        //         phone: req.body.phone,
            
        //         hashedPassword: req.body.hashedPassword,
            
        //         rollno: req.body.rollno,
            
                
        //         clubs: req.body.clubs,
                
        //         email: req.body.email
        //     }
        // )

        const oldStudent = await Student.findOne({where:{phone: phone}});
        if(oldStudent != null) {
            console.log('\n\n-----------old student--------')
            console.log(oldStudent);
            return res.json({
                message: "User already present",
                // Student: oldStudent
            });
        }

        const newStudent = new Student({
            branch, reg_id, name, phone, hashedPassword, rollno, clubs, email
        })

        newStudent.save()
        .then(val => {
            console.log(val);
             res.json({
                message: 'User resgistered'
             })    
        })
        
        .catch((error) => {
            console.error(error);
        })
}
    

const login = async (req, res) => {

    const {phone, password} = req.body;

    const oldStudent = await Student.findOne({where:{phone: phone}});
        if(oldStudent != null) {
            // console.log('\n\n-----------old student--------')
            console.log(oldStudent);
            return res.json({
                message: "login successful",
                // Student: oldStudent
            });
        }
        else {
            return res.json(
                {
                    message: "user not present",
                }
            )
        }

}


module.exports = {
    register,
    login
}