
function toggleCheck(event){
    
  var toggleItem = event.target;
  var parent = toggleItem.parentNode;
  var id = parent.id;
  toggleItem.classList.toggle("checked");

  if (id === "ul") {
    document.getElementById("donelist").appendChild(toggleItem);
  }
  else{

    document.getElementById("ul").appendChild(toggleItem);
      }
}

  
function addItem() {
       

      var textInput = document.getElementById("input").value;

      var text = document.createTextNode(textInput);

      var li = document.createElement("li");

      li.appendChild(text);

      if (textInput === ""){

          alert("Please put your values");
      }

      else{

        document.getElementById("ul").appendChild(li);
      }
          
          
        document.getElementById("input").value = "";
        li.addEventListener('click',toggleCheck);

        var list = document.createElement("span");

        var remove = document.createTextNode(" ✓ ");

        list.className = "listItems";

        list.appendChild(remove);

        li.appendChild(list);


        
        var listItems = document.getElementsByClassName("listItems");


        for (var i = 0;i < listItems.length; i++){

          listItems[i].onclick = function(){
          event.stopPropagation();

          var items = this.parentElement;

          items.style.display = "none";

   
            }
        }

    }



