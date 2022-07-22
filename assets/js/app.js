// Note: I've posted this on Dev

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

/*
Note that the below recursion challenge can be found here:
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown.
But it's the *example* provided, not the challenge itself.
*/


function countup(n) {
    if (n < 1) { // the base case
        return []
    } else {
        const countArray = countup(n - 1) // remember that, on the way "down", each call is added to the stack
        countArray.push(n)
        // console.log(countArray) // just a helpful line
        return countArray
    }
}

console.log(countup(5)) // [1, 2, 3, 4, 5]


/*
fCC: "At first, this seems counterintuitive since the value of n decreases but the values in the final array are increasing.
This happens because the push happens last, after the recursive call has returned.
At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1]."
*/


// The way "down":
    // countup(5 - 1) // added to stack first
    // countup(4 - 1) // added to stack second
    // countup(3 - 1) // added to stack third
    // countup(2 - 1) // added to stack fourth
    // countup(1 - 1) // added to stack fifth
  
// So the stack looks like this, top to bottom:
    // countup(1 - 1)
    // countup(2 - 1)
    // countup(3 - 1)
    // countup(4 - 1)
    // countup(5 - 1)
  
// The base case is reached:
    // countup(1 - 1) evaluates to countup(0)
    // ...which means n is 0
    // ...which means n < 1 is true
    // ...which means [] is returned to countup()
    // ...which means countArray = []
  
// The way "back up":
    // It is now that 'control' moves on to the 'countArray.push(n)' line
    // countArray = [1] // the 1 comes from the top of the stack (and then the 2 is at the top of the stack)
    // countArray = [1, 2] // the 2 comes from the top of the stack (and then the 3 is at the top of the stack)
    // countArray = [1, 2, 3] // the 3 comes from the top of the stack (and then the 4 is at the top of the stack)
    // countArray = [1, 2, 3, 4] // the 4 comes from the top of the stack (and then the 5 is at the top of the stack)
    // countArray = [1, 2, 3, 4, 5] // the 5 comes from the top of the stack (and then the stack is empty and countArray is returned)