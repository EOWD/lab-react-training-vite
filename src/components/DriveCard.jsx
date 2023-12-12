import { Rating } from "./Rating";
export function DriverCard({ name, rating, img, car }) {
  return (
    <div>
      <img src={img} alt={`Image not avalable ${name}`} height={'50px'} />

      <Rating num={rating} />
      <h3>{name}</h3>
      <p>{car.model} - {car.licensePlate}</p>
    </div>
  );
}
