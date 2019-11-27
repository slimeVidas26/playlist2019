<!DOCTYPE html>
<html lang="en">

<head>
  <?php require('components/head.html') ?>
</head>

<body>
  <nav role="navigation">
    <?php require('components/nav.html') ?>
  </nav>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br><br>
      <?php require('components/MODAL_addPlaylist.html') ?>

      <?php require('components/MODAL_addSongs.html') ?>
      <?php require('components/MODAL_alert.html') ?>


      <?php require('components/player.html') ?>
      <br><br>
    </div>
  </div>
  <div class="pl-container">
    <?php require('components/playList.html') ?>
  </div>
  <br><br>
  </div>
  <footer class="page-footer orange">
    <?php require('components/footer.html') ?>

  </footer>


  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="js/materialize.js"></script>
  <script src="js/init.js"></script>
  <script src="js/modal.js"></script>
  <script src="js/playlist.js"></script>

  <script src="js/Arctext/js/jquery.arctext.js"></script>



  <script>
    $('.arcText').arctext({
      radius: 150
    });
  </script>

</body>

</html>