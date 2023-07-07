import { Product } from "../Models/productModel";
import * as cloudinary from "cloudinary";
const getProduct= async (req:any,res:any):Promise<any>=>{
     try {
          const data = await Product.find({});
          console.log("product retreived successfuly");
          res.status(200).json(data)
     } catch (error) {
        console.log ("error occured while retreiving products", error)  
     }
};
const createProduct= async(req:any,res:any):Promise<any>=>{
     try {
         const data = await Product.create(req.body);
     //     const storage = multer.diskStorage({
     //      destination: (cb:any) => {
     //        cb(null, '/'); // Specify the destination folder where uploaded images will be stored
     //      },
     //      filename: (file:any, cb:any) => {
     //        cb(null, file.bedcover.jpd); // Use the original filename
     //      }
     //    });
     //    const upload = multer({ storage });
         console.log ("Product added to database successfully");
         res.status(200).json(data)
     } catch (error) {
          console.log ("error occured while adding product", error)   
     }
};
export {getProduct,createProduct}
