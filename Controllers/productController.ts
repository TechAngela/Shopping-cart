import { Product } from "../Models/productModel";
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
         console.log ("Product added to database successfully");
         res.status(200).json(data)
     } catch (error) {
          console.log ("error occured while adding product", error)   
     }
};
export {getProduct,createProduct}
