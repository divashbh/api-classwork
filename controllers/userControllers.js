const userModel=require('../models/usermodel')
 
// 1. Creating user function
const createUser= async(req,res)=>{    
    // 1. Get data from the user (Fname,lname,email,pp)
    console.log(req.body)
    // #. Destructuring
    const {firstName,lastName,email,password}=req.body;
 
    // 2. Validation
    if(!firstName || !lastName || !email || !password){
        return res.json({
            "success": false,
            "message":"Please enter fields!"
        })
    }
 
    // Try - Catch (Error Handling)
    try {
       
        // check if the user is already exist
        const existingUser= await userModel.findOne({email : email})
        if(existingUser){
            res.json({
                "success" : false,
                "message" : "User Already Exists!"
            })
        }
 
        // Save the user in database
        const newUser = new userModel({
            // Fields : Values received from user
            firstName : firstName,
            lastName : lastName,
            email : email,
            password : password
        })
 
        //  Actually save the user in database
        await newUser.save()
 
        //  send the success response
        res.json({
            "success" : true,
            "message" : "User Created Successfully!"
        })
       
    } catch (error) {
        console.log(error)
        res.json({
            "success": false,
            "message": "Internal Server Error!"
        })
    }
    // 2.1 if not : Send the response and stop the process
    // 3. if proper data
    // 4. Check existing user
    // 4.1 if yes : Send the response and stop the process
    // if not:
    // 5. Save in the database
    // 6. Send the success response
}
 
// 2. Login
// 3. Update profile
// 4. Change Password
 
// exporting
module.exports={
    createUser
}

// Task
// Controller - Routes - Index.json

//(make a productController.js)
//(Make a productRoutes.js)
//(Link to index.js)

// http://localhost:5000/api/product/create
//Response : Product API is Working ...!