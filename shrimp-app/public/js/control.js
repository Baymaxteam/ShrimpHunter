var i = 1;

function test() {
  var r = $('<button/>').attr({
    class: "btn icon-btn btn-info",
    id: "field_"+i,
    text: 'new' + i
  })
  .text("Shrimp Brand "+i);
  $("#btn-list").append(r);
  var r1 = $('<span/>').attr({
    type: "span",
    class: "glyphicon btn-glyphicon glyphicon-fire img-circle text-info"
  })
  $("#field_"+i).prepend(r1);
  i++;
}


$( "#Stop_button" ).click(function() {
  $.ajax({
                url: '/shrimps',
                type: 'PUT',
                success: function (result) {
                  //$("#Stop_button").after("<b>Motors Stop!</b>");
                }
            });
});


$.get( "/shrimps", function( data ) {
  console.log(data);
});
