import { Effect, Console, Schema } from "effect"


const User = Schema.Struct({
  id: Schema.Number,
  name: Schema.String
})

const fetchUser = Effect.tryPromise({
  try: async () => await fetch("https://jsonplaceholder.typicode.com/users/1").then(r => r.json()),
  catch: (err) => new Error(String(err))
})

const program = fetchUser.pipe(
  Effect.flatMap(data => Schema.decode(User)(data)),
  Effect.tap(user => Console.log("User:", user)),
  Effect.catchAll(err => Console.log("Error:", err.message))
)

Effect.runPromise(program)
