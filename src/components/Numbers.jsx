import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const numbers = [7, 8, 9, 4, 5, 6, 0, 1, 2, 3];

const renderButtons = (onClickNumber) => {
  const renderButton = (number, index) => (
    <Button key={index} text={number.toString()} clickHandler={onClickNumber} />
  );

  return numbers.map(renderButton);
};

const Numbers = ({ onClickNumber }) => (
  <section className="numbers">{renderButtons(onClickNumber)}</section>
);

Numbers.propTypes = {
  onClickNumber: PropTypes.func.isRequired,
};

export default Numbers;
