// var i = 1;

// function test() {
//   var r = $('<button/>').attr({
//     class: "btn icon-btn btn-info",
//     id: "field_"+i,
//     text: 'new' + i
//   })
//   .text("Shrimp Brand "+i);
//   $("#btn-list").append(r);
//   var r1 = $('<span/>').attr({
//     type: "span",
//     class: "glyphicon btn-glyphicon glyphicon-fire img-circle text-info"
//   })
//   $("#field_"+i).prepend(r1);
//   i++;
// }



// Making button when loading page
$.get( "/shrimps", function( data ) {
  console.log(data);
  // Make Button
  data.forEach(function(setting){$("#btn-list").append($('<button/>').attr({
                                              class: "btn icon-btn btn-info",
                                              id: "motor_button_"+setting.ID,
                                              text: setting.NAME
                                              }).text(setting.NAME))
  $("#motor_button_"+setting.ID).prepend(
      $('<span/>').attr({
          type: "span",
          class: "glyphicon btn-glyphicon glyphicon-fire img-circle text-info"
          }));
  // It will sen PUT to commend motor spaining, when user click button
  $("#motor_button_"+setting.ID).click(function() {
            $.ajax({
                url: '/shrimps/'+setting.ID,
                type: 'PUT',
                success: function (result) {
                  $("#console_text").html("<p>Shrimp Brand: "+setting.NAME+" capturing!</p>");
                }
            });             
  });
  });
    
});

// Stop the motors
$( "#Stop_button" ).click(function() {
  $.ajax({
                url: '/shrimps',
                type: 'PUT',
                success: function (result) {
                  $("#console_text").html("<p>Motors stop!</p>");
                }
            });
});


//setting video_stream 
var ip = location.host;
$( "#video_stream" ).attr("src", 'http://'+ip.slice(0,ip.search(":"))+':8788/?action=stream');
