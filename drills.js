/*1. 
a) Constant: O(1)
b) Linear: O(n)


2. constant time

3.  polynomial time

4.  linear time

5.  linear time

6.  polynomial time

7. linear time

8. Logarithmic time

9.  constant time

10. linear time
*/
let tick = 0
function stepsToSolveHanoiT(height, srcP, desP, bufferP) {
    if (height >= 1) {
        stepsToSolveHanoiT(height - 1, srcP, bufferP, desP);

        console.log('Move disk from Tower ', srcP, ' to Tower ', desP);

        stepsToSolveHanoiT(height - 1, bufferP, desP, srcP);

        console.log(tick)
    }
    tick++
    return;
}

stepsToSolveHanoiT(10, "A", "C", "B");