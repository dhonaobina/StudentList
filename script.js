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

function clrList() 
{
    document.getElementById("txtout").innerHTML = "";
    var element = document.getElementById("studentList");
    var lis = element.getElementsByTagName("li");
    var i = element.getElementsByTagName("li").length;
    while(i>0)
    {
        element.removeChild(lis[0]);
    }
}