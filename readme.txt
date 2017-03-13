Hi guys,

a brief overview of what I've done.

I have put my code in main.js as per instructions and run tests accordingly, making the test fil pointing to main.js.

I don't like to reinvent the wheel so I browsed for an efficient, robust version of the needed algorythm and this is the one I adopted:

0:
Transform the given number into an array of digits

1
Traverse the array from the rightmost digit. Keep traversing till you get a digit which is smaller than the previously traversed digit:
let's call it array[x]

2:
Consider the subarray made of all the digits right side of x. Find the smallest digit (bigger than array[x]) among them 
(it doesn't matter if there's more than one, pick the first one): let's call it array[y].

3
Swap array[x] and array[y] 

4
Sort all the digits right side of array[x]

5
Re-transform array[] into a number

I think this is an efficient algorythm although I am a bit rusty with Javascript, particularly with the local/global variables handling.
