import User from "../models/User.js";


const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {           
            $set: req.body,
        }, { new: true });  
        res.status(200).json(updatedUser);
    }
    catch (err) {
        next(err);
    }   
}

const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
    }       
    catch (err) {
        next(err);
    }
}

const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        // Return token and user details
        const { password: hashedPassword, isAdmin, ...otherDetails } = user._doc;
        return res.status(200).json({
                ...otherDetails,
                // success: true,
                // message: "User logged in successfully",
            });
        } catch (err) {
        next(err);
    }
}   

// const getAllUsers = async (req, res, next) => {
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//     } catch (err) {
//         next(err);
//     }
// }   


// getAllUsers
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();

        // Exclude sensitive fields (like passwords) for each user
        const sanitizedUsers = users.map(({ _doc }) => {
            const { password, isAdmin, ...otherDetails } = _doc;
            return otherDetails;
        });

        return res.status(200).json(sanitizedUsers);
    } catch (err) {
        next(err);
    }
};


export { updateUser, deleteUser, getUser, getAllUsers };