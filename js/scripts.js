function newItem() {
  //javascript

  let inputValue = $("#input").val();
  if (!inputValue) {
    alert("You must write something!");
    return;
  }

  //1. Adds new list item & delete button:
  let $li = $("<li></li>").text(inputValue);
  let $crossOutButton = $(
    '<button type="button" class="crossOutButton">X</button>'
  );
  $li.append($crossOutButton);

  //2. Crossing out an item from the list of items by double-clicking the list item:
  $li.on("dblclick", function () {
    $(this).toggleClass("strike");
  });

  //3. Adding the delete button "X":
  $crossOutButton.on("click", function (e) {
    e.stopPropagation();
    $li.addClass("delete");
  });

  //4. Appends & clears inputs:
  $("#list").append($li);
  $("#input").val("");
}

//5. Bids events and makes
$(function () {
  //6. Reorders the list items
  $("#list").sortable();
});

// If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.

/*
// jQuery Code
//1. Adding a new item to the list:

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }
//2. Crossing an item out:
  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });
//3. Adding a delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

//   crossOutButton.on("click", deleteListItem);
//   function deleteListItem(){
// 		li.addClass("delete")
// 	}
   $('#list').sortable();
*/
