
//----Pipe---- ( chain multiple operation ) 
import { Console, Effect, pipe } from "effect"



const increment = (x: number) => x + 1
const double = (x: number) => x * 2
const subtractTen = (x: number) => x - 10


const result = pipe(4, increment, double, subtractTen)// left to right

console.log(result)

