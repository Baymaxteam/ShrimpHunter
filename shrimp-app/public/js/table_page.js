
//var ip = location.host;
var options = {
                source: '/shrimps',
                rowClass: "classy",
                callback: function(){
                    
                    $("#dataTable tr.classy").each(function() {
                        var id_index = $(this).children("td:first")[0].innerHTML;
                        var buttonID = 'deleteButton_'+id_index;
                        var r= $('<button type="button" id="'+buttonID+'" class="btn btn-danger btn-xs">Delete</button>');
                        $(this).append(r);
                        $(this).children("button").click(function() {
                            $.ajax({
                                    url: '/shrimps/'+id_index,
                                    type: 'DELETE',
                                    success: function(result) {
                                        $("#dataTable").jsonTableUpdate(options);
                                    }
                                });
                        });
                    });
                }
            };

$("#dataTable").jsonTable({
    head : ['No.', 'Species','Motor1','Motor2','Motor3', 'Delete'], // Goes on the <thead>
    json : ['ID', 'NAME', 'Motor1', 'Motor2', 'Motor3'] //json identities from the loaded json object
});   

$("#dataTable").jsonTableUpdate(options);

$("#dataForm").submit(function(e) {
    $.ajax({
                url: '/shrimps',
                type: 'POST',
                data: $( this ).serializeArray(),
                success: function (result) {
		          $("#dataTable").jsonTableUpdate(options);
           
                
                }
            });
e.preventDefault();
});



