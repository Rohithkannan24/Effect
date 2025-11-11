// Zipping -- run effects together and combine their result.

//Effect.zip(effect1, effect2)--Runs both effects in parallel and returns a tuple [result1, result2]
//      const program = Effect.zip(
//   Effect.succeed("A"),
//   Effect.succeed("B")
// )

// Effect.runPromise(program).then(console.log)


// Effect.zipWith(effect1, effect2, (a, b) => ...)--Same as zip, but you provide a function to combine results
 
// const program = Effect.zipWith(
//   Effect.succeed(5),
//   Effect.succeed(3),
//   (a, b) => a + b
// )

// Effect.runPromise(program).then(console.log)

