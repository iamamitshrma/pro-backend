import { asyncHandler } from"../utils/asyncHandler.js";


const registerUser = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "Ok"
    })
});


const loginUser = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "Ok"
    })
});



export { registerUser, loginUser };