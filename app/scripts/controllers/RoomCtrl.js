(function() {
     function RoomCtrl(Rooms) {
         this.rooms = Room.all;

     }
 
     angular
         .module('blocChat')
         .controller('RoomCtrl', ['Rooms', RoomCtrl]);
 })();