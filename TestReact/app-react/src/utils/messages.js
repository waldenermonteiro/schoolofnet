import swal from 'sweetalert'
const alertSuccess = (message) => {
  swal({
      title: message ,
      icon: "success",
    })
}
const verificationAlert = ({index, message} , callback) => {
    swal({
        title: "Are you sure?",
        text: message,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          callback(index)
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
}
export {
  alertSuccess,
  verificationAlert
}