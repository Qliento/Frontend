import { POST_RESEARCH } from '../../actions/actions';


export const orderResearch = () => async (data) =>{
    console.log(data)
    await fetch("http://207.154.250.71/purchase/order-form/", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.parse(data)
    })
    // alert("success");
}