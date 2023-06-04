import { useState, useEffect } from "react";
import LoadingSpinner from "./Loading";

const MealOrder = (props) => {
  const [currentUser, setCurrentUser] = useState(props.currentUser);

  if (!props.authenticated) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  
  return <div>MealOrder</div>;
};

export default MealOrder;
