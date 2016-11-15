
//var ip = location.host;
var options = {
                source: '/shrimps',
                rowClass: "classy",
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


