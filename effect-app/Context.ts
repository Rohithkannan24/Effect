import { Effect, Context, Console } from "effect"


// Declaring a tag for a service that generates random numbers
class Random extends Context.Tag("MyRandomService")<
  Random,
  { readonly next: Effect.Effect<number> }
>() {}

class Logger extends Context.Tag("MyLoggerService")<
  Logger,
  {
    readonly log: (message: string) => Effect.Effect<void>
  }
>() {}

// Using the service
//
//         ┌─── Effect<void, never, Random>
//         ▼
// const program = Random.pipe(
//   Effect.andThen((random) => random.next),
//   Effect.andThen((randomNumber) =>
//     Console.log(`random number: ${randomNumber}`)
//   )
// )    

const contextVAl = Effect.flatMap(Random, (random) =>
  Effect.flatMap(Logger, (logger) =>
    Effect.flatMap(random.next, (n) => logger.log(String(n)))
  )
)

const runVal = contextVAl.pipe(
    Effect.provideService( Random, {
  next: Effect.sync(() => Math.random())
}),
  Effect.provideService( Logger, {
  log: (msg) => Effect.sync(() => console.log(`Number into String : ${msg}`))
}),
)




Effect.runPromise(runVal)