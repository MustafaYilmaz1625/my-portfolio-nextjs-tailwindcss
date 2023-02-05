import { Order } from "../../componets/hero/Order";
import  Slider  from "../../componets/hero/Slider";

export const Home = () => {
 
  return (
    <>
      <header className="header">
       <Slider/>
       <Order/>
      </header>
    </>
  );
};
