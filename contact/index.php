<!doctype html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta http-equiv="content-language" content="ja">
<title>お問い合わせ / 株式会社ジェラート</title>
<meta name="title" content="" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=1440">
<meta name="description" content="">
<meta name="keywords" content="">
<meta property="og:type" content="website" />
<meta property="og:url" content="" />
<meta property="og:title" content="" />
<meta property="og:description" content="" />
<meta property="og:image" content="" />
<meta property="og:site_name" content="" />
<link rel="apple-touch-icon" href="images/favicons/" />
<link rel="shortcut icon" href="../images/favicons/favicon.ico" />
<link rel="icon" type="image/png" href="../images/favicons/" sizes="">
<link rel="icon" type="image/png" href="../images/favicons/" sizes="">
<link rel="icon" type="image/png" href="../images/favicons/" sizes="">
<link rel="mask-icon" href="../images/favicons/" color="">
<meta name="msapplication-TileColor" content="">
<meta name="msapplication-TileImage" content="../images/favicons/">
<meta name="theme-color" content="">
<!-- Bootstrap CSS -->
<link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
<!-- Font Awesome CSS --->
<link rel="stylesheet" type="text/css" href="../css/font-awesome.min.css">
<!-- Original CSS -->
<link rel="stylesheet" type="text/css" href="../css/gelato.css">
<!-- jQuery -->
<script type="text/javascript" src="../js/jquery-3.0.0.min.js"></script>
<script type="text/javascript" src="../js/jquery-ui.min.js"></script>
<!-- js cookie -->
<script type="text/javascript" src="../js/js.cookie.js"></script>
<!-- Bootstrap Js -->
<script type="text/javascript" src="../js/bootstrap.min.js"></script>
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
<!-- Original Js -->
<script type="text/javascript" src="../js/gelato.js"></script>
</head>
<body class="contactIntro">
  <div id="loadingWrap">
    <div id="loading">
      <img src="../images/loadingIceCreamLogo.svg" alt="loadingIceCreamLogo" id="loadingIceCreamLogo"/> <img src="../images/loadingIceCreamLogoExclamation.svg" alt="loadingIceCreamLogoExclamation" id="loadingIceCreamLogoExclamation"/>
    </div>
  </div>
  <section>
    <div id="contactPage">
      <nav id="globalNavi">
        <ul id="naviWrap">
          <li> <a href="../#topPage"><img src="../images/gelatoLogoFontBlack.svg" alt="gelatoLogoFontBlack"/></a> </li>
          <li> <a href="../#aboutPage">ABOUT<span class="underLine">-</span></a> </li>
          <li> <a href="../#worksPage">WORKS<span class="underLine">-</span></a> </li>
          <li> <a href="../#companyPage">COMPANY<span class="underLine">-</span></a> </li>
          <li id="linkGallery"> <a href="https://www.instagram.com/gelatoinc/" target="_blank">GALLERY<span class="underLine">-</span></a> <span id="instagramIcon">Link To Gelato Inc's Instagram!</span></li>
          <li> <a href="../recruit">RECRUIT<span class="underLine">-</span></a> </li>
          <li> <a href="../underConstructionNow">PRIVACY POLICY<span class="underLine">-</span></a> </li>
          <li class="current"> <a href="">CONTACT<span class="underLine">-</span></a> </li>
        </ul>
      </nav>
      <div id="mainImage">
        <h1><span>C</span><span>O</span><span>N</span><span>T</span><span>A</span><span>C</span><span>T</span></h1>

      </div>
      <div id="contactContents">
        <h2>お問い合わせ</h2>
        <p>
          弊社にお問い合わせのある方は、下記コンタクトフォームよりお問い合わせ下さい。<br>
          ご連絡をお待ちしております。<br>
          <span class="fa fa-check"></span>項目は必須項目になります。
        </p>
        <form method="post" action="mail.php" name="contact">
          <table>
            <tr>
              <th>
貴社名
              </th>
              <td>
<input type="text" name="貴社名" placeholder="Gelato Inc." id="inputCompany">
              </td>
            </tr>
            <tr>
              <th>
お名前<span class="fa fa-check">
              </th>
              <td>
<input type="text" name="お名前" placeholder="Your Name" id="inputName">
              </td>
            </tr>
            <tr>
              <th>
フリガナ<span class="fa fa-check">
              </th>
              <td>
<input type="text" name="フリガナ" placeholder="Your Name Phonetic" id="inputPhonetic">
              </td>
            </tr>
            <tr>
              <th>
メールアドレス<span class="fa fa-check">
              </th>
              <td>
<input type="text" name="メールアドレス" placeholder="info@gelato-inc.com" id="inputMail">
              </td>
            </tr>
            <tr>
              <th>
確認用メールアドレス<span class="fa fa-check">
              </th>
              <td>
                <input type="text" name="確認用メールアドレス" placeholder="info@gelato-inc.com" id="inputMailConfirm">
              </td>
            </tr>
            <tr>
              <th>
電話番号<span class="fa fa-check">
              </th>
              <td>
                <input type="text" name="電話番号" placeholder="000-0000-0000" id="inputTel">
              </td>
            </tr>
            <tr>
              <th>
お問い合わせ内容<span class="fa fa-check">
              </th>
              <td>
<textarea name="お問い合わせ内容" placeholder="add inquiry" id="inputMatter"></textarea>
              </td>
            </tr>

          </table>
          <div id="buttonBox">
            <button class="btn btn-default contactSubmit" type="submit">送信</button>
          </div>
        </form>
      </div>
      <p id="copyRight"> COPYRIGHT ©<span><?php echo date('Y'); ?></span> GELATO Inc. </p>
</div>
</section>
</body>
</html>
