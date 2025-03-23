import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props)=>{

    const currency = '$';
    const delivery_fee = 10;
    const [search,setsearch] = useState('');
    const [showsearch,setshowsearch] = useState(false)
    const [cartitems,setcartitems] = useState([])

    const addtocart = async (itemId,size)=>{
      let cartdata = structuredClone(cartitems);
      if(!size){
        toast.error("Select product size")
        return;
      }
      if(cartdata[itemId]){
        if(cartdata[itemId][size]){
          cartdata[itemId][size]++;
        }
        else{
          cartdata[itemId][size] = 1;
        }
      }
      else{
        cartdata[itemId] = {};
        cartdata[itemId][size] = 1;
      }
      
      setcartitems(cartdata);
    }

    const getcartcount = ()=>{
      let totalcount = 0;
      for(const item in cartitems){
        for(const i in cartitems[item]){
          try {
            if(cartitems[item][i]>0){
              totalcount += cartitems[item][i];
            }
          } catch (error) {
            
          }
        }
      }
      return totalcount;
    }

    const value = {
      products,currency,delivery_fee,search,setsearch,showsearch,setshowsearch,cartitems,addtocart,getcartcount
    }

    return (
      <ShopContext.Provider value={value}>
         {props.children}
      </ShopContext.Provider>
    )
}

export default ShopContextProvider
