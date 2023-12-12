
export function BoxColor({ r, g, b }) {
    return (
        <div style={{ display:'flex' , height: '300px', backgroundColor: `rgb(${r}, ${g}, ${b})` }}> <h3>rgb{r}, {g}, {b}</h3></div>
    );
}