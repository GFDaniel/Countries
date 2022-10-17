import { useState } from "react";
import disableScroll from 'disable-scroll';


export default function useModal() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    if (!isOpen) {
      disableScroll.on(); 
    }else{
      disableScroll.off();
    }
    setisOpen(!isOpen);
  };

  return {
    isOpen,
    toggle
  };
}
