<!-- MODAL ADD PLAYLIST  //////////////////////////////////////////////////////////////// -->
        <!-- Modal Structure -->
        <div id="modalAdd" class="modal">
      <div class="modal-content">
        <h4>Add New Playlist</h4>
        <div class="row pre">
           <form class="col s12 m6" id="addPlaylistForm" name ="addPlaylistForm">
             <div class="row modal-form-row">
               <div class="input-field col s12">
                 <input value = "toto" id="playlist_name" name ="playlist_name" type="text" class="validate">
                 <label for="playlist_name">Playlist Name</label>
               </div>
             </div>
             <div class="row">
               <div class="input-field col s12">
                 <input  value = "titi" id="playlist_url" name="playlist_url"  type="text" class="validate">
                 <label for="playlist_url">Playlist URL</label>
               </div>
             </div>       
                 
                  <a class="next modal-close modal-action  modal-trigger  waves-effect waves-blue  btn left" data-target="modal-add-songs">Next</a>

                  <a class="reset modal-action  waves-effect waves-green btn right">Reset Fields</a>
    
           </form>
   
           <div class="col s12 m6">
               
               <div class="row pre">
                 <div class=" col s12 preview"> </div>
               </div>       
              
               
                 </div>             
             </div>
         </div>
       </div>
      <!-- MODAL ADD PLAYLIST END //////////////////////////////////////////////////////////////// -->
 

<!-- Modal Trigger -->
<!-- <button class="waves-effect waves-light btn modal-trigger" data-target="modal1">Modal</button> -->