import API from "../../API";




export function downLoadFilesActions(id) {
  let token = localStorage.getItem("user");
  return async (dispatch) => {
    await API.downLoadFilesAPI(id,token).then((res) => {
    var win = window.open(res.data, '_blank');
      win.focus();
    });
  };
}