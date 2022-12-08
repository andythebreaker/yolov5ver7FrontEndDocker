window.onload = function () {
  console.log("window loaded")
  document.getElementsByClassName('cssupfile')[0].onclick = (event) => {
    event.preventDefault(); Swal.fire({
      title: '即將前往上傳處',
      text: "請選擇目前的docker運行平台?(你如果沒有管理伺服器的經驗或你其實不知道你現在在幹嘛，按藍色按鈕就是了)",
      icon: 'info',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'docker lab (遊樂場)',
      showCloseButton: true,
      denyButtonText: '本機檔案 (server)',
      showDenyButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '〔正在執行試用版〕',
          html:`<iframe src="${window.location.protocol+'//'+String(window.location.hostname).replace('59484', '34821')}" title="_"></iframe>`,
          //text: String(window.location.href).replace('59484', '34821'),//34821,//59484
          // '(將在新分頁中開啟)'
          showCancelButton: false,
          showCloseButton: true,
          confirmButtonText: '將在新分頁中開啟',
        }).then((result) => {
          if (result.isConfirmed) {
            window.open(window.location.protocol+'//'+String(window.location.hostname).replace('59484', '34821'), '_blank').focus();
          }
        })
      } else if (result.isDenied) {
        Swal.fire({
          title: '〔正在執行穩定版〕',
          html:`<iframe src="${window.location.protocol+'//'+window.location.hostname+':'+'34821'}" title="_"></iframe>`,
         // text: window.location.protocol,
          // '(將在新分頁中開啟)'
          showCancelButton: false,
          showCloseButton: true,
          confirmButtonText: '將在新分頁中開啟',
        }).then((result) => {
          if (result.isConfirmed) {
            window.open(`${window.location.protocol+'//'+window.location.hostname+':'+'34821'}`, '_blank').focus();
          }
        })
      } else {
        Swal.fire(
          '放棄操作'
        )
      }
    });
  };
  document.getElementsByClassName('cssseefile')[0].onclick = (event) => {
    event.preventDefault(); Swal.fire({
      title: '即將前往檔案庫處',
      text: "請選擇目前的docker運行平台?(你如果沒有管理伺服器的經驗或你其實不知道你現在在幹嘛，按藍色按鈕就是了)",
      icon: 'info',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'docker lab (遊樂場)',
      showCloseButton: true,
      denyButtonText: '本機檔案 (server)',showDenyButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '〔正在執行試用版〕',
          text: '請按下方按鈕前往',
          // '(將在新分頁中開啟)'
          showCancelButton: false,
          showCloseButton: true,
          confirmButtonText: '將在新分頁中開啟',
        }).then((result) => {
          if (result.isConfirmed) {
            window.open("https://google.com", '_blank').focus();
          }
        })
      } else if (result.isDenied) {
        Swal.fire({
          title: '〔正在執行穩定版〕',
          text: '請按下方按鈕前往',
          // '(將在新分頁中開啟)'
          showCancelButton: false,
          showCloseButton: true,
          confirmButtonText: '將在新分頁中開啟',
        }).then((result) => {
          if (result.isConfirmed) {
            window.open("https://google.com", '_blank').focus();
          }
        })
      } else {
        Swal.fire(
          '放棄操作'
        )
      }
    });
  };
  document.getElementsByClassName('cssseerslt')[0].onclick = (event) => {
    event.preventDefault(); Swal.fire({
      title: '即將前往看結果處',
      text: "請選擇目前的docker運行平台?(你如果沒有管理伺服器的經驗或你其實不知道你現在在幹嘛，按藍色按鈕就是了)",
      icon: 'info',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'docker lab (遊樂場)',
      showCloseButton: true,
      denyButtonText: '本機檔案 (server)',showDenyButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '〔正在執行試用版〕',
          text: '請按下方按鈕前往',
          // '(將在新分頁中開啟)'
          showCancelButton: false,
          showCloseButton: true,
          confirmButtonText: '將在新分頁中開啟',
        }).then((result) => {
          if (result.isConfirmed) {
            window.open("https://google.com", '_blank').focus();
          }
        })
      } else if (result.isDenied) {
        Swal.fire({
          title: '〔正在執行穩定版〕',
          text: '請按下方按鈕前往',
          // '(將在新分頁中開啟)'
          showCancelButton: false,
          showCloseButton: true,
          confirmButtonText: '將在新分頁中開啟',
        }).then((result) => {
          if (result.isConfirmed) {
            window.open("https://google.com", '_blank').focus();
          }
        })
      } else {
        Swal.fire(
          '放棄操作'
        )
      }
    });
  };
}