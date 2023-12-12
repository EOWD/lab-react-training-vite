export function Random({min,max}){
    const Num = Math.floor(Math.random() *( max-min+1))
console.log (Math.floor(Math.random()*(20)))
 return <h3>{`Random Number is ${Num}`}</h3>;
}