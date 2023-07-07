import { Cart } from "../Models/cartModel";
import { Product } from "../Models/productModel";

const createCart = async (req: any, res: any): Promise<any> => {

     try {
          const data = req.body
          const found = await Product.findOne({ name: data.name })
          if (!found) {
               res.status(409).json({
                    message: "this product is not available"
               })
          } else {
               const name = found.name
               const amount = found.amount
               res.status(200).json({
                    message: " product added successfully on cart", name, amount
               })

               const selected = new Cart({
                    name: found.name,
                    amount: amount,
               })
               selected.save()
          }

     } catch (e) {
          console.log("the error occured while adding product to cart:", e)

     }

}

const viewCart = async (req: any, res: any): Promise<any> => {
     try {
          const theCart = await Cart.find({})
          console.log("all products in cart")
          res.status(200).json({
               message: "This is all product", theCart
          })

     } catch (e) {
          console.log("THis is the error:", e)
          res.status(400).json({
               message: "error while viewing all carts", e
          })

     }

}
const deleteElement = async (req: any, res: any): Promise<any> => {
     try {
          const data = req.body
          const found = await Cart.findOne({ name: data.name })
          if (!found) {
               res.status(409).json({
                    message: "this products is not available", found
               })
          } else {
               const id = found._id
               await Cart.deleteOne({ _id: id })
               res.status(200).json({
                    message: "the product is deleted", id
               })
          }
     } catch (e) {
          console.log("error occured while deleting:", e)

     }
}

const updateProduct = async (req: any, res: any): Promise<any> => {

     try {
          const data = req.body;
          const found = await Cart.findOne({ name: data.name });
          if (!found) {
               res.status(409).json({
                    message: "This product is not available",
                    found,
               });
          } else {
               const name: any = found.name;
               const amount: any = found.amount;
              const newQuantity: any = req.body.Quantity;
               const newTotalAmount = newQuantity * amount;
  
           let updatedData = new Cart({
                    ...data,
                    name: name,
                    Quantity: newQuantity,
                    amount: newTotalAmount,
                    })
                     res.status(200).json({
                    message: " data updated successfully on cart", updatedData
               })
               
          }
     } catch (error) {
          console.log("Error occurred while updating the cart", error);
     }
};

export { createCart, viewCart, deleteElement, updateProduct }