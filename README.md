# Creating Arrays
- A variable declared in JavaScript can store a single value, but what if you want to store multiple values in a single variable? Well, you may have to use an array.
In JavaScript, an array can store multiple values at a time. There are two types of arrays, single-dimensional and multi-dimensional.
##### In a single-dimensional array, you will have one row and multiple columns.
- You can identify each value stored in an array with the help of an index number.
- An index number within an array starts at 0. Therefore, the first element in an array is [0], the second element is [1], the third element is [2], and so on.
- You can traverse within an array with the help of loops.
##### In a multi-dimensional array, you will have multiple rows and multiple columns.
- A multi-dimensional array has multiple rows and columns. It is an array of arrays.
- You can consider a multi-dimensional array as a matrix where you can store data in rows and columns.
- You can display the multi-dimensional array data in a tabular format. In JavaScript, you need to use a nested for loop to work with multi-dimensional arrays.

###### The logic presented in the code is as follows:

- A single-dimensional array is created with 5 elements. The array stores all string values.
- In the for loop, the counter i is initialized to 0.
- The loop will go on until the value of i is less than the total length of the array. The length property determines the total count of the values stored in the array.
- A new list element is created.
- A new text node is created for the list element. The text for the list item will be picked up from the array. In other words, the first list item will be “David”. The second list item will be “John”, and so on.
-  new list items are added to the page.
- The total number of elements in the array is displayed.
