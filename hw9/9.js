function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onhashchange = function () {
    let hash = window.location.hash;
    let main = document.querySelector('.bigmargin');
    
    if (hash === '#login') {
      main.innerHTML = `
        <h1>登入</h1>
        <input type="text" placeholder="帳號"/><br/>
        <input type="password" placeholder="密碼"/><br/>
        <input type="button" value="登入"/><br/>
      `;
    } else if (hash === '#logout') {
      main.innerHTML = '<p>您已登出成功</p>';
    } else if (hash === '#signup') {
      main.innerHTML = `
        <h1>註冊</h1>
        <input type="text" placeholder="姓名"/><br/>
        <input type="text" placeholder="帳號"/><br/>
        <input type="password" placeholder="密碼"/><br/>
        <input type="email" placeholder="email"/><br/>
        <input type="text" placeholder="血型"/><br/>
        <input type="date" placeholder="生日"/><br/>
        <input type="button" value="註冊"/><br/>
      `;
    } else {
      main.innerHTML = `
      <h1>首頁</h1>
      <h2>我的個人網站</h2>
        <p>就讀校系:金門大學 資工系</p>
        <p>學號:111010576</p>
        <p>我的<a href="https://www.instagram.com/ruoxin0704/" target="_blank">instagram</a>帳號</p>
        <br/>  
      `;
    }
  };
  
  window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
      var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  };
  