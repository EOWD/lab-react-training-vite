export function Rating ({num}){
    const roundnumber= Math.floor(num)
    let star=''
    for (let i=0; i<5; i++) {
        star += (i < roundnumber ? '★' : '☆' )

}

return <div>{star}</div> }