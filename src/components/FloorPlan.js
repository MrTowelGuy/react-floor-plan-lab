import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

function FloorPlan(props) {
   return (
    <div>
      <h1>FLOOR PLAN</h1>
      <Bedroom whichBedroom="1"/>
      <Kitchen/>
      <Bath whichBath="Full"/>
      <Bedroom whichBedroom="2"/>
      <LivingRoom/>
      <Bath whichBath="Half"/>
      <Bedroom whichBedroom="3"/>
    </div>
   );
 }
 
 // Must export the component's function (or class)
 export default FloorPlan;