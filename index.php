<!DOCTYPE html>
<html lang="en">

<head>
  <?php require('components/head.php') ?>
</head>

<body>
  <nav role="navigation">
    <?php require('components/nav.php') ?>
  </nav>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br><br>
      <?php require('components/addPlaylistModal.php') ?>
      <?php require('components/addPlaylistSongModal.php') ?>
      <?php require('components/player.php') ?>
      <br><br>
    </div>
  </div>
  <div class="pl-container">
    <?php require('components/playList.php') ?>
  </div>
  <br><br>
  </div>
  <footer class="page-footer orange">
    <?php require('components/footer.php') ?>

  </footer>


  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="js/materialize.js"></script>
  <script src="js/init.js"></script>
  <script src="js/appendToForm.js"></script>
  <script src="js/Arctext/js/jquery.arctext.js"></script>



  <script>
    $('.arcText').arctext({
      radius: 150
    })
  </script>

</body>

</html>