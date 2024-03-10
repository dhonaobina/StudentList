var studentArray = new Array ("David", "John", "Michelle", "Sandra", "Alex");
function dispList() 
{
    for (var i = 0; i<studentArray.length; i++) 
    {
        var listItem = document.createElement("li");
        var itemText = document.createTextNode (studentArray[i]);
        listItem.appendChild(itemText);
        document.getElementById('studentList').appendChild(listItem);
    }
    document.getElementById("txtout").innerHTML = "There are " + studentArray.length + " elements in the array."
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

function srtList() 
{ 
    studentArray.sort();
    dispList();
}
function reverseList() 
{
    studentArray.reverse();
    dispList();
}
function getInput(srch)
{
    return srch == document.getElementById("inputText").value;
}
function searchList()
{
    var item = studentArray.find(getInput);
    if (studentArray.indexOf(item) == -1)
    {
        document.getElementById("txtout").innerHTML = "The searched item is not found in the array !!";
    }
    else
    {
        var index = studentArray.indexOf(item) + 1;
        document.getElementById("txtout").innerHTML = "The searched item is at position " + index + " in the array.";
    }
}
function joinList()
{
    studentArray.toString();
    document.getElementById("txtout").innerHTML = "The students in the list are - " + studentArray.join(" | ");
}
function addItemtoEnd()
{
    if (document.getElementById('inputText').value == '')
    {
        document.getElementById("txtout").innerHTML = "Please enter an item to add."
    }
    else
    {
        studentArray.push(document.getElementById('inputText').value);
        dispList();
    }
}
function removeItemfromEnd()
{
    studentArray.pop();
    dispList();
}
function removeItemfromStart()
{
    studentArray.shift();
    dispList();
}
function addItemtoStart()
{
    if (document.getElementById('inputText').value == '')
    {
        document.getElementById("txtout").innerHTML = "Please enter an item to add."
    }
    else
    {
        studentArray.unshift(document.getElementById('inputText').value);
        dispList();
    }
}

var markListArray = [["English", "Maths", "Science", "Computer", "Robotics"], [78,97,87,96,99]];
var markTable = document.getElementById("markList");
for (var i=0, row; row=markTable.rows[i]; i++)
{
    for (var j = 0, col; col=row.cells[j]; j++)
    {
        col.innerText = markListArray[i][j];
    }
}