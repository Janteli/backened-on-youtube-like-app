import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; // to read, open, remove file from local storage after upload

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

const uploadOnCloudinary = async (loacalFilePath) =>{
    try {
        if (!loacalFilePath) return null;
        // upload to cloudinary
        const response = await cloudinary.uploader.upload(loacalFilePath, {
            resource_type: "auto", // images, video, raw
        }) 
        // after upload complete remove file from local storage
        console.log("File uploaded to cloudinary successfully", response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(loacalFilePath); // remove file from local storage if upload fails
        return null;
    }
}

export {uploadOnCloudinary};