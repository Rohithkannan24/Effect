import { Effect, Console } from "effect"
import { log } from "effect/Console"


const program = Console.log("Rohith!!!!")

Effect.runSync(program) 
//-------------------------------------------------------------------


interface User {
  readonly id: number
  readonly name: string
}


const getUser = (userId: number): Effect.Effect<User, Error> => {
 
  const userDatabase: Record<number, User> = {
    1: { id: 1, name: "John Doe" },
    2: { id: 2, name: "Jane Smith" }
  }

  
  const user = userDatabase[userId]
  if (user) {
    return Effect.succeed(user)
  } else {
    return Effect.fail(new Error("User not found"))
  }
}


const exampleUserEffect = getUser(1)

const result =Effect.runSync(exampleUserEffect);
console.log(result);

// Try-----------------

const parse = (input: string) =>
  // This might throw an error if input is not valid JSON
  // Effect.try(() => JSON.parse(input))

  Effect.try({
    try:()=>JSON.parse(input),
    catch: (unknown) => new Error(`something went wrong ${unknown}`)
  })

//      ┌─── Effect<any, UnknownException, never>
//      ▼
const tryVal = parse("")

const res =Effect.runSyncExit(tryVal);

console.log(res)