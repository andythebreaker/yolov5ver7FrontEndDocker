window.onload = function() {
     console.log("window loaded")
document.getElementsByClassName('btn btn-primary btn-lg disabled')[0].onclick=(event)=>{event.preventDefault();Swal.fire({
  title: 'هل تريد الاستمرار؟',
  icon: 'question',
  iconHtml: '؟',
  confirmButtonText: 'نعم',
  cancelButtonText: 'لا',
  showCancelButton: true,
  showCloseButton: true
})}  
};
