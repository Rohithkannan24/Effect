import { Console, Effect } from "effect"

// Effect.loop(initial, options)--------------
// A loop that runs 5 times, collecting each iteration's result
const loopVal = Effect.loop(
  // Initial state
  1,
  {
    // Condition to continue looping
    while: (state) => state <= 5,
    // State update function
    step: (state) => state + 1,
    // Effect to be performed on each iteration
    body: (state) => Effect.succeed(state)
  }
)

Effect.runPromise(loopVal).then(console.log)
// Output: [1, 2, 3, 4, 5]

// Effect.iterate(initial, conditionFn, bodyFn)-----------------

const iterateVal = Effect.iterate(
  // Initial iterateVal
  1,
  {
    // Condition to continue iterating
    while: (iterateVal) => iterateVal <= 5,
    // Operation to change the iterateVal
    body: (iterateVal) => Effect.succeed(iterateVal + 1)
  }
)

Effect.runPromise(iterateVal).then(console.log)


// Effect.forEach(array, fn)-----------------

const forEachVal = Effect.forEach([1, 2, 3, 4, 5], (n, index) =>
  Console.log(`Currently at index ${index}`).pipe(Effect.as(n * 2))
)

Effect.runPromise(forEachVal).then(console.log)
/*
Output:
Currently at index 0
Currently at index 1
Currently at index 2
Currently at index 3
Currently at index 4
[ 2, 4, 6, 8, 10 ]
*/