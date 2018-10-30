function stringAnimationLoop ($this, obj, delay) {
  $this = $($this);
  //Run function for each index of array
  $.each(obj, function ( i, elm ){
    // If array index value is an intiger
    if (Number.isInteger(elm)) {
      elm = elm.toString(); //Convert it to a string
    }
    $this.delay(delay); // Add delay before
    $this.queue(function(){ // Queue up a function to append
      $this.append( obj[i] );
      $this.dequeue();
    });
    $this.fadeIn();
  });
}
