
//----Pipe---- ( chain multiple operation ) 
import { Console, Effect, pipe } from "effect"
import { effect } from "effect/Layer"


const increment = (x: number) => x + 1
const double = (x: number) => x * 2
const subtractTen = (x: number) => x - 10


const result = pipe(4, increment, double, subtractTen)// left to right

console.log(result)

// Map - Transforms the result inside the effect

const MapVal = pipe(
  Effect.succeed(5),
  Effect.map(x => x * 2),  // transform
  Effect.map(x => x + 3)
)

Effect.runPromise(MapVal).then(console.log)

//flatMap -- its like a Map but instead of returning plain value.(return another effect)
        const flatMapVal = pipe(
        Effect.succeed(10),
        Effect.flatMap(x => Effect.succeed(x * 2)),   // chain new Effect
        Effect.flatMap(x => Effect.succeed(x + 5))
        )

        Effect.runPromise(flatMapVal).then(console.log)
    //Async
        const fetchUser = (id: number) =>
        Effect.promise(() => fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json()))

        const asyncflatMap = pipe(
        fetchUser(1),
        Effect.flatMap(user => Effect.succeed(user.name)),
        Effect.map(name => name.toUpperCase())
        )

        Effect.runPromise(asyncflatMap).then(console.log)

//tap -- run side effect without changing value..(like logging...)

        const tapVal = pipe(
        Effect.succeed(10),
        Effect.tap(x => Effect.log(`Current value: ${x}`)), // side effect
        Effect.map(x => x * 2)
        )

        Effect.runPromise(tapVal).then(console.log)

        //----------
        const tapVal1 = pipe(
        Effect.succeed({ id: 1, name: "Rohith" }),
        Effect.tap(user => Console.log(`Got user: ${JSON.stringify(user)}`)),
        Effect.map(user => user.name)
        )

        await Effect.runPromise(tapVal1)


//As-- replacing the value.
       
        const AsVal = pipe(Effect.succeed(5), Effect.as("Rohith!!!!!!"))

        Effect.runPromise(AsVal).then(console.log)