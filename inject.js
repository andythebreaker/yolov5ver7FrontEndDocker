var portupfile = 49173;
var portseefile = 49170;
var portseerslt = 23186;
var portexecmdrelay = 30461;
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
window.onload = function () {
  console.log("window loaded");
  document.getElementsByClassName('cmdexe')[0].onclick = (event) => {
    event.preventDefault();
    Swal.fire({
      title: '執行指令中',
      html: `<iframe src="${window.location.protocol +
         '//'
       + window.location.hostname + ':' + portexecmdrelay}/cmd?name=${
        filterXSS(    document.getElementsByClassName('fname')[0].getElementsByTagName('input')[0].value)
      }&conf=${
        filterXSS(     document.getElementsByClassName('fconf')[0].getElementsByTagName('input')[0].value)
      }&sous=${
        filterXSS(      document.getElementsByClassName('fsosu')[0].getElementsByTagName('input')[0].value)
      }&mods=${
        filterXSS(      document.getElementsByClassName('fmduri')[0].getElementsByTagName('input')[0].value)
      }" title="_"></iframe>`,//testpy
      icon: 'info',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '檢視結果',//'docker lab (遊樂場)',
      showCloseButton: true,
      denyButtonText: '本機檔案 (server)',
      showDenyButton: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "等等拉到頁面下方，先是結果區域，按進去，如果404就是還沒跑完，等一下，然後在按一次，反覆，直到結果出現"
        )
      } else if (result.isDenied) {
        Swal.fire({
          title: '〔正在執行穩定版〕',
          html: `<iframe src="${window.location.protocol + '//' + window.location.hostname + ':' + portupfile}" title="_"></iframe>`,
          // text: window.location.protocol,
          // '(將在新分頁中開啟)'
          showCancelButton: false,
          showCloseButton: true,
          confirmButtonText: '將在新分頁中開啟',
        }).then((result) => {
          if (result.isConfirmed) {
            window.open(`${window.location.protocol + '//' + window.location.hostname + ':' + '34821'}`, '_blank').focus();
          }
        })
      } else {
        Swal.fire(
          '放棄操作'
        )
      }
    });
  }
  document.getElementsByClassName('cssupfile')[0].onclick = (event) => {
    event.preventDefault();
    Swal.fire({
      title: '人機驗證',//'即將前往上傳處',
      text: '我只是要確認你是不是人類',// "請選擇目前的docker運行平台?(你如果沒有管理伺服器的經驗或你其實不知道你現在在幹嘛，按藍色按鈕就是了)",
      icon: 'info',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '按我就對了',//'docker lab (遊樂場)',
      showCloseButton: true,
      denyButtonText: '本機檔案 (server)',
      showDenyButton: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '上傳處',// '〔正在執行試用版〕',
          html: `<iframe src="${window.location.protocol + '//' + window.location.hostname + ':' + portupfile}" title="_"></iframe>`,//  html: `<iframe src="${window.location.protocol + '//' + String(window.location.hostname).replace('59484', /*'34821'*/portupfile)}" title="_"></iframe>`,
          //text: String(window.location.href).replace('59484', '34821'),//34821,//59484
          // '(將在新分頁中開啟)'
          showCancelButton: false,
          showCloseButton: true,
          showConfirmButton: false,
          confirmButtonText: '將在新分頁中開啟',
        }).then((result) => {
          if (result.isConfirmed) {
            window.open(window.location.protocol + '//' + String(window.location.hostname).replace('59484', '34821'), '_blank').focus();
          }
        })
      } else if (result.isDenied) {
        Swal.fire({
          title: '〔正在執行穩定版〕',
          html: `<iframe src="${window.location.protocol + '//' + window.location.hostname + ':' + portupfile}" title="_"></iframe>`,
          // text: window.location.protocol,
          // '(將在新分頁中開啟)'
          showCancelButton: false,
          showCloseButton: true,
          confirmButtonText: '將在新分頁中開啟',
        }).then((result) => {
          if (result.isConfirmed) {
            window.open(`${window.location.protocol + '//' + window.location.hostname + ':' + '34821'}`, '_blank').focus();
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
      title: '人機驗證',// '即將前往檔案庫處',
      text: '我只是要確認你是不是人類',// "請選擇目前的docker運行平台?(你如果沒有管理伺服器的經驗或你其實不知道你現在在幹嘛，按藍色按鈕就是了)",
      icon: 'info',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '按我就對了',//'docker lab (遊樂場)',
      showCloseButton: true,
      denyButtonText: '本機檔案 (server)', showDenyButton: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '檔案庫',//'〔正在執行試用版〕',
          html: `<iframe src="${window.location.protocol + '//' + window.location.hostname + ':' + portseefile}" title="_" width="${vw * 0.75}" height="${vh * 0.75}"></iframe>`,//  html: `<iframe src="${window.location.protocol + '//' + String(window.location.hostname).replace('59484', /*'34824'*/portseefile)}" title="_"></iframe>`,
          // '(將在新分頁中開啟)'
          showCancelButton: false,
          showCloseButton: true,
          showConfirmButton: false,
          width: vw * 0.85,
          confirmButtonText: '將在新分頁中開啟',
        }).then((result) => {
          if (result.isConfirmed) {
            window.open(window.location.protocol + '//' + String(window.location.hostname).replace('59484', '34824'), '_blank').focus();
          }
        })
      } else if (result.isDenied) {
        Swal.fire({
          title: '〔正在執行穩定版〕',
          html: `<iframe src="${window.location.protocol + '//' + window.location.hostname + ':' + portseefile}" title="_"></iframe>`,
          // '(將在新分頁中開啟)'
          showCancelButton: false,
          showCloseButton: true,
          confirmButtonText: '將在新分頁中開啟',
        }).then((result) => {
          if (result.isConfirmed) {
            window.open(`${window.location.protocol + '//' + window.location.hostname + ':' + '34824'}`, '_blank').focus();
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
      title: '人機驗證',// '即將前往看結果處',
      text: '我只是要確認你是不是人類',//  "請選擇目前的docker運行平台?(你如果沒有管理伺服器的經驗或你其實不知道你現在在幹嘛，按藍色按鈕就是了)",
      icon: 'info',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '按我就對了',//'docker lab (遊樂場)',
      showCloseButton: true,
      denyButtonText: '本機檔案 (server)', showDenyButton: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '看結果處',// '〔正在執行試用版〕',
          html: `<iframe src="${window.location.protocol +
             '//' + window.location.hostname + ':'
              + portseerslt}/runs/predict-seg/${
                document.getElementsByClassName('fname')[0].getElementsByTagName('input')[0].value
              }/" title="_" width="${vw * 0.75}" height="${vh * 0.75}"></iframe>`,
          // '(將在新分頁中開啟)'
          showCancelButton: false,
          width: vw * 0.85,
          showCloseButton: true,
          showConfirmButton:false,
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
  var lmos = document.querySelectorAll('a.MuiLink-root');
  for (let lmosi = 0; lmosi < lmos.length; lmosi++) {
    const element = lmos[lmosi];
    element.onclick = (event) => {
      event.preventDefault(); console.log("<3");
      document.getElementsByClassName('fmduri')[0].getElementsByTagName('input')[0].value = element.href;
    }
  }
}