import axios from "axios";

export function bePartner(data){
  console.log(data)
    return async (dispatch)=>{
      await  axios
      .post("http://207.154.250.71/feedback/", data)

}
}