window.setTimeout(function(){
    var todo = [];
    
    var input = prompt("what is your choice");

    while (input !== "quit")
    {
        if (input === "new")
        {
            addtodo();
        }

        else if (input === "list")
        {
            listtodo();
        }

        else if (input === "delete")
        {
            deletetod();
        }

        input = prompt("what is your choice");
    }

    console.log("0k, you quit the app");

    function listtodo()
    {
        console.log("*************");
        todo.forEach(function(todo, i){
            console.log(i + " :  " + todo);
        });
        console.log("*************");
    }

    function addtodo(){
       var newtodo = prompt("Enter new Todo");
       todo.push(newtodo);
       console.log("added todo");
    }

    function deletetod(){
        var index = prompt("Enter index of todo of delete");
        todo.splice(index, 1);
        console.log("Deleted Todo");
    }
}
, 500);

