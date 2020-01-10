<!DOCTYPE html>
<html lang="en">

<head>
  <?php require('components/head.html') ?>
</head>

<body>
  <nav role="navigation">
  <div class="navbar-fixed ">
    <nav>
    <div class="nav-wrapper">
      <ul class="left hide-on-med-and-down">
          <li>
              <!-- Modal Trigger -->
                <a class=" modal-trigger" href="./index.php">
                 Home
              </a>
            </li>
       

        <li>
            <!-- Modal Trigger -->
              <a class=" modal-trigger" href="./about.php">
               About Me
            </a>
          </li>

         
      </ul>

      <ul id="nav-mobile" class="sidenav">
          
        <li><a class=" modal-trigger sidenav-close" href="#modalAdd">
            <i class="material-icons left addPlaylist">add_circle </i>
          Add New Playlist</a></li>
      </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger">
        <i class="material-icons">menu</i></a>
        <form>
            <div class="input-field right">
              <input id="search" type="search" required placeholder="Search Playlist">
              <label class="label-icon" for="search"><i class="material-icons search">search</i></label>
              <i class="material-icons ">close</i>
            </div>
          </form>
    </div>
  </nav>
</div>
  </nav>

  
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br><br>
     



     
      <br><br>
    </div>
  </div>
  <div class="pl-container">
  <img src="Docs/resume.jpg" alt="">
  </div>
  <br><br>
  </div>
  
  <footer class="page-footer orange">
    <?php require('components/footer.html') ?>

  </footer>

  <!--  Scripts-->

  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/jquery-text-marquee@latest/dist/jquery.text-marquee.min.js"></script>
  <script src="js/materialize.js"></script>
  <script src="js/init.js"></script>
  




  

</body>

</html>