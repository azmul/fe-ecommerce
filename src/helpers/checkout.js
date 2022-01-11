// get unique element
import { getDiscountPrice } from "./product";

export const getOrderPayload = (cartItems, currency) => {
    const products = [];
    let cartTotalPrice = 0;
    cartItems.forEach((cartItem) =>{
        const discountedPrice = getDiscountPrice(
            cartItem.price,
            cartItem.discount
          );
          const finalProductPrice = (
            cartItem.price * currency.currencyRate
          ).toFixed(2);
          const finalDiscountedPrice = (
            discountedPrice * currency.currencyRate
          ).toFixed(2);

          discountedPrice != null
            ? (cartTotalPrice +=
                finalDiscountedPrice * cartItem.quantity)
            : (cartTotalPrice +=
                finalProductPrice * cartItem.quantity);
        products.push({
            discount: cartItem.discount,
            fullDescription: cartItem.fullDescription,
            id: cartItem.id,
            image: cartItem.image,
            name: cartItem.name,
            offerEnd: cartItem.offerEnd,
            price: cartItem.price,
            quantity: cartItem.quantity,
            sku: cartItem.sku,
            finalProductPrice,
            finalDiscountedPrice,
        })
        
    })
    return {products,cartTotalPrice, shippingStatus: 1, paymentMethod: 1,};
  };