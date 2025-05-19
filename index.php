<?php
error_reporting(0);

$full_url  = "http://" . $_SERVER['HTTP_HOST'] . $_SERVER['PHP_SELF']; # Ex: 'http://example.com', 'https://example.com/mywebsite', etc.
$full_url_arr = pathinfo($full_url);

//$uri = $_SERVER['REQUEST_URI'];

// full url for site meta
$base_url = $full_url_arr["dirname"].'/';

// base url
$parsed = parse_url($base_url);
$uri = $parsed['path'];

// fav icon full path
$fav_url = $full_url_arr["dirname"].'/static/img/favicon/';

// share image
$image = $full_url_arr["dirname"].'/static/img/share.jpg';

// ============================================================================
// Edit these to change the Meta Data
// ============================================================================

// title
$title = 'The Emoji Movie - Official Movie Website | Sony Pictures Animation';

// descriptions
$descriptionMeta = 'The Emoji Movie – Unlock the Secret World of Emojis. – Only At Cinemas | Sony Pictures';
$descriptionOg = 'THE EMOJI MOVIE unlocks the never-before-seen secret world inside your smartphone. Hidden within the messaging app is Textopolis, a bustling city where all your favorite Emojis live, hoping to be selected by the phone’s user, but when a greater danger threatens the phone, the fate of all Emojis depends on these three unlikely friends who must save their world before it’s deleted forever. #EmojiMovie - Only At Cinemas. www.TheEmojiMovie.net';

// keywords
$keywords = 'The Emoji Movie, The Emoji Movie 2017, T.J. Miller, James Corden, Anna Faris, Sir Patrick Stewart, Maya Rudolph, Jennifer Coolidge, Steven Wright, Jake T. Austin, Sophia Vergara, Christina Aguilera, Jeff Ross, Sony Pictures Animation, Columbia Pictures';

// twitter handle
$twitterHandle = '@EmojiMovie';


?>
<!DOCTYPE html>
<html class="no-js">
  <head>
    <base href="<?php echo $uri?>">
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="IE=edge" />
    <title><?php echo $title?></title>
    <meta name="description" content="<?php echo $descriptionMeta?>" />
    <meta name="keywords" content="<?php echo $keywords?>" />
    <meta property="og:title" content="<?php echo $title?>" />
    <meta property="og:description" content="<?php echo $descriptionOg?>" />
    <meta property="og:image" content="<?php echo $image?>" />
    <meta property="og:url" content="<?php echo $base_url?>" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="<?php echo $title?>" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="<?php echo $base_url?>" />
    <meta name="twitter:site" content="<?php echo $description?>" />
    <meta name="twitter:creator" content="<?php echo $twitterHandle?>" />
    <meta name="twitter:title" content="<?php echo $twitterHandle?>" />
    <meta name="twitter:description" content="" />
    <meta name="twitter:image:src" content="<?php echo $image?>" />
    <meta itemprop="name" content="<?php echo $title?>">
    <meta itemprop="description" content="<?php echo $description?>">
    <meta itemprop="image" content="<?php echo $image?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="<?=$uri?>static/js/modernizr-2.8.3.min.js"></script>
    <link rel="shortcut icon" href="<?php echo $fav_url?>favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" href="<?php echo $fav_url?>apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="57x57" href="<?php echo $fav_url?>apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo $fav_url?>apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="<?php echo $fav_url?>apple-touch-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo $fav_url?>apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="<?php echo $fav_url?>apple-touch-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="<?php echo $fav_url?>apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="<?php echo $fav_url?>apple-touch-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo $fav_url?>apple-touch-icon-180x180.png" />
    <link rel="stylesheet" type="text/css" href="static/css/app.css">
     <!--[if lt IE 10]>
    <style type="text/css">
    #app { display: none; }
    </style>
    <![endif]-->
  </head>
  <body>
    <!--[if lt IE 10]>
    <p class="browsehappy" style="text-align: center">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p><br /><br /><img src="static/img/poster.jpg" alt="Splash" width="800" style="display:block;margin:auto;">
    <![endif]-->

    <h1 style="display:none;"><?php echo $title?></h1>
    
    <div class="gamewindow">
        <div class="closegame">
            <a id="closeiframe" onclick="closeGame();">X</a>
        </div>
        <iframe id="gameframe" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
    </div>
    <div id="ageGate_wrapper" style="display: none;">
            <!-- content black overlay -->
            <div class="content_overlay open"></div>

            <div class="ageGate_content open">
                <div class="closeBtn">X</div>
                <div class="message">Please enter your date of birth.</div>
                <div class="form_wrapper">
                    <div class="date_pill">
                        <select id="ageGate_month" class="ageGate_date_field">
                            <option value="">MM</option>
                            <option value="0">01</option>
                            <option value="1">02</option>
                            <option value="2">03</option>
                            <option value="3">04</option>
                            <option value="4">05</option>
                            <option value="5">06</option>
                            <option value="6">07</option>
                            <option value="7">08</option>
                            <option value="8">09</option>
                            <option value="9">10</option>
                            <option value="10">11</option>
                            <option value="11">12</option>
                        </select>
                        <select id="ageGate_day" class="ageGate_date_field">
                            <option value="">DD</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                            <option value="9">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                        <select id="ageGate_year" class="ageGate_date_field">
                            <option value="">YYYY</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1965">1965</option>
                            <option value="1964">1964</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>
                            <option value="1959">1959</option>
                            <option value="1958">1958</option>
                            <option value="1957">1957</option>
                            <option value="1956">1956</option>
                            <option value="1955">1955</option>
                            <option value="1954">1954</option>
                            <option value="1953">1953</option>
                            <option value="1952">1952</option>
                            <option value="1951">1951</option>
                            <option value="1950">1950</option>
                            <option value="1949">1949</option>
                            <option value="1948">1948</option>
                            <option value="1947">1947</option>
                            <option value="1946">1946</option>
                            <option value="1945">1945</option>
                            <option value="1944">1944</option>
                            <option value="1943">1943</option>
                            <option value="1942">1942</option>
                            <option value="1941">1941</option>
                            <option value="1940">1940</option>
                            <option value="1939">1939</option>
                            <option value="1938">1938</option>
                            <option value="1937">1937</option>
                            <option value="1936">1936</option>
                            <option value="1935">1935</option>
                            <option value="1934">1934</option>
                            <option value="1933">1933</option>
                            <option value="1932">1932</option>
                            <option value="1931">1931</option>
                            <option value="1930">1930</option>
                            <option value="1929">1929</option>
                            <option value="1928">1928</option>
                            <option value="1927">1927</option>
                            <option value="1926">1926</option>
                            <option value="1925">1925</option>
                            <option value="1924">1924</option>
                            <option value="1923">1923</option>
                            <option value="1922">1922</option>
                            <option value="1921">1921</option>
                            <option value="1920">1920</option>
                            <option value="1919">1919</option>
                            <option value="1918">1918</option>
                            <option value="1917">1917</option>
                            <option value="1916">1916</option>
                            <option value="1915">1915</option>
                            <option value="1914">1914</option>
                            <option value="1913">1913</option>
                            <option value="1912">1912</option>
                            <option value="1911">1911</option>
                            <option value="1910">1910</option>
                            <option value="1909">1909</option>
                            <option value="1908">1908</option>
                            <option value="1907">1907</option>
                            <option value="1906">1906</option>
                            <option value="1905">1905</option>
                            <option value="1904">1904</option>
                            <option value="1903">1903</option>
                            <option value="1902">1902</option>
                            <option value="1901">1901</option>
                            <option value="1900">1900</option>
                        </select>
                    </div>
                    <div class="submit_wrapper">
                        <div class="submitBtn">SUBMIT</div>
                        <div class="cancel">CANCEL</div>
                    </div>
                    <div class="disclaimer">You are about to leave a Sony site and different Terms of Use and Privacy Policy will apply.</div>
                </div>
            </div>
        </div>
        
    <app id="app"></app>

    <script>
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    </script>

    <script src="<?php echo $uri?>static/js/vendor.js"></script>
    <script src="<?php echo $uri?>static/js/jquery-1.11.1.min.js"></script>
    <script src="<?php echo $uri?>static/js/agegate.min.js"></script>
    <script src="<?php echo $uri?>static/js/app.js"></script>

    <?php include __DIR__ . '/tracking.php' ?>
    
  </body>
</html>
