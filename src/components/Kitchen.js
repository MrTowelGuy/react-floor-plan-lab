import Oven from "./Oven";
import Sink from "./Sink"
 
 function Kitchen(props) {
   return (
     <div className="Kitchen">
      <h3>Kitchen</h3>
       <Oven/>
       <Sink/>
     </div>
   );
 }
 
 // Must export the component's function (or class)
 export default Kitchen;