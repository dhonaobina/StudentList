var studentArray = new Array ("David", "John", "Michelle", "Sandra", "Alex");
function dispList() 
{
    for (var i=0; i<studentArray.length; i++) 
    {
        var listItem = document.createElement("li");
        var itemText = document.createTextNode (studentArray[i]);
        listItem.appendChild(itemText);
        document.getElementById('studentList').appendChild(listItem);
    }
    document.getElementById("txtout").innerHTML = "There are " + studentArray.length | " elements in the array."
}