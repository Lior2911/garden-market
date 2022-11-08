import React from "react";
import { Col, Row } from "react-bootstrap";
import StoreItemsJson from "../../../services/store.json";
import StoreItem from "../../features/StoreItem/StoreItem";

const MyMarket = () => {
  return (
    <>
      <Row md={2} xs={1} lg={4} className="g-3">
        {StoreItemsJson.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default MyMarket;
