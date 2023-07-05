import {Cart} from "../Models/cartModel";
import {Product} from "../Models/productModel"
const createCart = async(req:any,res:any):Promise<any>=>{

     try{
          const data=req.body
          const found=await Product.findOne({name:data.name})
          if(!found){
              res.status(409).json({
                  message:"this product is not available"
              })
          }else{
              const amount=found.amount
              const Quantity=found.Quantity
              res.status(200).json({
                  message:" for created cart",amount,Quantity
              })
  
             const selected=new Cart({
              name:found,
              amount:amount,
              Quantity:Quantity
             })
             selected.save()
          }
          
      }catch(e){
          console.log("the error occured while adding product to cart:",e)
  
      }    
  
}

const viewCart=async(req:any,res:any): Promise<any>=>{
     try{
         const theCart=await Cart.find({})
         console.log("all products in cart")
         res.status(200).json({
             message:"This is all product",theCart
         })
 
     }catch(e){
         console.log("THis is the error:",e)
         res.status(400).json({
             message:"error while viewing all carts",e
         })
 
     }
 
 }
 const deleteElement=async(req:any,res:any):Promise<any> =>{
     try{
         const data=req.body
         const found=await Product.findOne({name:data.name})
         if(!found){
             res.status(409).json({
                 message:"this products is not available"
             })
         }else{
             const id=found._id
             await Cart.deleteOne({_id:id})
             res.status(200).json({
                 message:"the product deleted successfully",
             })
         }
     }catch(error){
         console.log("error occured while deleting:",error)
 
     }
 }


export{createCart , viewCart , deleteElement}