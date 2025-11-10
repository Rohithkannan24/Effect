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


const exampleUserEffect = getUser(2)

const result =Effect.runSync(exampleUserEffect);
console.log(result);