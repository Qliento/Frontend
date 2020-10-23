import axios from "axios";

export function orderResearch(data){
    return async (dispatch)=>{
      await  axios
      .post("http://207.154.250.71/purchase/order-form/", data)
      .then(res => {
        console.log(res)
      });

}
}