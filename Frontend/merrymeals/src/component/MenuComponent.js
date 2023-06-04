import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import mealService from "../service/MealService";
const MenuComponent = () => {
  const [mealItem, setMealItem] = useState([]);
  const mondayMenuItems = mealItem.filter((item) => item.day === "Monday");
  const tuesdayMenuItems = mealItem.filter((item) => item.day === "Tuesday");
  const storeData = () => {
    mealService.getMealItems().then((response) => {
      setMealItem(response.data);
    });
  };
  useEffect(() => {
    storeData();
  }, []);

  return (
    <Container>
      {console.log()} <h1>Meal Menu</h1>
      <Row className="justify-content-center">
        <Table bordered striped className="table table-rounded">
          <tbody>
            <tr>
              <td>
                <h4>Monday</h4>
              </td>
              {mondayMenuItems.map((item) => (
              <td>
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </td>
            ))}
            </tr>
            <tr>
              <td>
                <h4>Tuesday</h4>
              </td>
              {mondayMenuItems.map((item) => (
              <td>
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </td>
            ))}
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default MenuComponent;
