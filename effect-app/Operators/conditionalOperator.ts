import * as Effect from "effect";

 //---if---

        // const ifVal = Effect.cond({
        //   condition: true,
        //   onTrue: Effect.succeed("It's true"),
        //   onFalse: Effect.succeed("It's false")
        // })

        // Effect.runPromise(ifVal).then(console.log)


//When---- runs only condition is true (Effect.when(condition, effect))

        // const program = Effect.when(
        //   5 > 3,
        //   Effect.log("Condition met ")
        // )

        // Effect.runPromise(program)

//WhenEffect-- same as when.(Effect.whenEffect(conditionEffect, effect))
        //    const isEven = (n: number) => Effect.succeed(n % 2 === 0)

        // const program = Effect.whenEffect(
        //   isEven(4),
        //   Effect.log("Even number ")
        // )

        // Effect.runPromise(program) 

//unless-- opposite to when (Effect.unless(condition, effect))
        // const program = Effect.unless(
        // false,
        // Effect.log("Runs because condition is false ")
        // )  

        // Effect.runPromise(program)