// Effect.loop(initial, options)---

// const program = Effect.loop(0, {
//   while: (n) => n < 3,
//   body: (n) => Effect.succeed(n + 1)
// })
// Effect.runPromise(program).then(console.log)

// Effect.iterate(initial, conditionFn, bodyFn)

// const program = Effect.iterate(0, (n) => n < 5, (n) => n + 1)
// Effect.runPromise(program).then(console.log)

// Effect.forEach(array, fn)

// const program = Effect.forEach(
//   [1, 2, 3],
//   (n) => Effect.log(`Item: ${n}`)
// )
// Effect.runPromise(program)