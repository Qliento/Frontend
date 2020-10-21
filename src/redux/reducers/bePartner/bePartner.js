export const bePartner = () => async (dispatch, data) =>{
    await fetch("http://private-anon-24b1e89aa0-qliento.apiary-proxy.com/feedback/", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    alert("success");
}