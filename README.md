
![image](https://github.com/dhonaobina/StudentList/assets/113093370/913e099d-ff12-40e9-b340-b5a3d671a2aa)

# Creating Arrays
- A variable declared in JavaScript can store a single value, but what if you want to store multiple values in a single variable? Well, you may have to use an array.
- In JavaScript, an array can store multiple values at a time. There are two types of arrays, single-dimensional and multi-dimensional.
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

##### Working with Single-Dimentional Arrays
- Assume a situation in an application where you want to sort the array elements, search for a particular element, or join all the elements. You can do all these tasks with the help of various built-in array methods. These methods help to perform various operations on single-dimensional arrays such as sorting, searching, joining, reversing, etc.

##### The sort() 
- method helps to sort the array in ascending order. 
##### The reverse() 
- method reverses the elements in an unsorted array. This method sorts the elements in descending order in a sorted array. 
##### The find() 
- method searches the required element in an array. 
##### The join() 
- method joins the array elements. However, these built-in methods will not modify the original array elements.
##### The push() 
- method is used to add a new element to the end of the array.
##### The pop() 
- method is used to remove the last element from the array.
##### The shift()
- method is used to remove the first element from the array.
##### The unshift()
- method is use to add new element to the beginning of the array.
