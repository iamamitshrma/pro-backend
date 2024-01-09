import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { app } from './app.js';
dotenv.config({
    path: "./env"
})
const PORT = process.env.PORT || 4114;

connectDB().then(() => {
    app.on("error", (error) => {
        console.log("EXPRESS Error : ", error);
        throw error;
    })
    app.listen(PORT, () => {
        console.log(`Server is runnig at port : ${PORT}`)
    })
}).catch((err) => {
    console.log("MONGODB connection failed !!!", err);
});