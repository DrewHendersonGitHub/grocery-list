$(document).ready(function() {
  $("#groceryForm").submit(function(event) {
    event.preventDefault();
    let items = [];
    let upperCaseItems = [];
    items.push($("input#item1").val());
    items.push($("input#item2").val());
    items.push($("input#item3").val());
    items.push($("input#item4").val());
    items.push($("input#item5").val());
    items.sort();
    items.forEach(function(item) {
      upperCaseItems.push(item.toUpperCase());
    });

    $(".item1").text(upperCaseItems[0]);
    $(".item2").text(upperCaseItems[1]);
    $(".item3").text(upperCaseItems[2]);
    $(".item4").text(upperCaseItems[3]);
    $(".item5").text(upperCaseItems[4]);
    
    $("#results").show();
  });
});