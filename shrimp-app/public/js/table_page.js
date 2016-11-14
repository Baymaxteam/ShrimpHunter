


//$("#dataTable").jsonTableUpdate("http://192.168.0.103:3000/shrimps");

//$("#dataTable").jsonTableUpdate([{"ID":1,"NAME":"胡椒蝦","Motor1":426,"Motor2":200,"Motor3":15},{"ID":2,"NAME":"泰國蝦","Motor1":123,"Motor2":426,"Motor3":222}]);
var json_source = [{"ID":1,"NAME":"胡椒蝦","Motor1":426,"Motor2":200,"Motor3":15},{"ID":2,"NAME":"泰國蝦","Motor1":123,"Motor2":426,"Motor3":222}];

var options = {
                source: 'http://192.168.0.103:3000/shrimps',
                rowClass: "classy",
            };

$("#dataTable").jsonTable({
    head : ['No.', 'Species','Motor1','Motor2','Motor3'], // Goes on the <thead>
    json : ['ID', 'NAME', 'Motor1', 'Motor2', 'Motor3'] //json identities from the loaded json object
});   

$("#dataTable").jsonTableUpdate(options);

$("#dataForm").submit(function(e) {
    e.preventDefault();
});
