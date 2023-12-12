import "./App.css";
import { IdCard } from "./components/IdCard";
import { Greeting } from "./components/Greeting";
import { Random } from "./components/Random";
import { BoxColor } from "./components/BoxColor";
import {Rating} from './components/Rating'
import { CreditCard } from "./components/CreaditCard";
import { DriverCard } from "./components/DriveCard";
import {Like} from "./components/LikeButton";
import {Clickable} from "./components/ClickablePhoto"
function App() {
  return (
    <div className="App">
    <iframe src="https://eiadoraby.com" width="800" height="600"></iframe> 
      <h1> LAB | React Training</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greeting lang="en" children="kakashi" />
      <Random min={1} max={20} />
      <BoxColor r={150} g={17} b={70} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <div><Rating num={3}/> 
      <Rating num={1.5}/>
      <Rating num={2}/>
      <Rating num={5}/>
      <Rating num={4.5}/>
      
      </div>
      <br />
      <div style={{display:'flex'}}>
      <DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }}
/>

<DriverCard
  name="Dara Khosrowshahi"
  rating={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }}
/>

      </div>
<Clickable/>

      <Like/>

    </div>
  );
}

export default App;
