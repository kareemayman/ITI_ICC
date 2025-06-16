
//* Test Decrement counter button  (TASK) 
import { fireEvent, render,screen } from "@testing-library/react";
import TestEvents from "./TestEvents";

it("increment counter",()=>{
      render(<TestEvents/>);
      fireEvent.click(screen.getByTestId("button-up"));
      expect(screen.getByTestId("counter")).toHaveTextContent(1);

})

it("decrement counter",()=>{
      render(<TestEvents/>);
      fireEvent.click(screen.getByTestId("button-down"));
      expect(screen.getByTestId("counter")).toHaveTextContent(-1);

})




// npm test -- -- coverage











