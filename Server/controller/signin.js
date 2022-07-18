import signin from "../model/signin/signin";
import signup from "../model/signup/signup";


export const signup = async (req, res) => {
    //validate the data
    const error = signinValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
}