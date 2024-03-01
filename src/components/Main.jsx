
import FirstDiv from "./firstDiv";
import SecondDiv from "./secondDiv";
import ThirdDiv from "./thirdDiv";

import { useState } from "react";

const Main = ({currency, setCurrency}) => {
  
  const [isHovered, setIsHovered] = useState(false);
  const [elementHovered, setElementHovered] = useState("");

  const handleMouseEnter = (element) => {
      setIsHovered(true);
      setElementHovered(element);
  };

  const handleMouseLeave = () => {
      setIsHovered(false);
  };

    return (
        <main>
            <FirstDiv isHovered={isHovered} elementHovered={elementHovered} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} currency={currency} setCurrency={setCurrency}/>
            <SecondDiv />
            <ThirdDiv isHovered={isHovered} elementHovered={elementHovered} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} currency={currency} setCurrency={setCurrency}/>
        </main>   
    )
}

export default Main;