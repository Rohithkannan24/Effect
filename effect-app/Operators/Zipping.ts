// Zipping -- run effects together and combine their result.

import { Effect } from "effect";

// Effect.zip(effect1, effect2)--Runs both effects in parallel and returns a tuple [result1, result2]
     const zipVal = Effect.zip(
  Effect.succeed("A"),
  Effect.succeed("B")
)

Effect.runPromise(zipVal).then(console.log)


const task1 = Effect.succeed(1).pipe(
  Effect.delay("200 millis"),
  Effect.tap(Effect.log("task1 done"))
)

const task2 = Effect.succeed("hello").pipe(
  Effect.delay("100 millis"),
  Effect.tap(Effect.log("task2 done"))
)

// Combine the two effects together
//
//      ┌─── Effect<[number, string], never, never>
//      ▼
const program = Effect.zip(task1, task2)

Effect.runPromise(program).then(console.log)


// Effect.zipWith(effect1, effect2, (a, b) => ...)--Same as zip, but you provide a function to combine results
 
const zipWithVal = Effect.zipWith(
  Effect.succeed(5),
  Effect.succeed(3),
  (a, b) => a + b
)

Effect.runPromise(zipWithVal).then(console.log)



const task3 = Effect.succeed(1).pipe(
  Effect.delay("200 millis"),
  Effect.tap(Effect.log("task1 done"))
)
const task4 = Effect.succeed("hello").pipe(
  Effect.delay("100 millis"),
  Effect.tap(Effect.log("task2 done"))
)

//      ┌─── Effect<number, never, never>
//      ▼
const task5 = Effect.zipWith(
  task1,
  task2,
  // Combines results into a single value
  (number, string) => number + string.length
)

Effect.runPromise(task5).then(console.log)
