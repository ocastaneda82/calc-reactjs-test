import React from "react";
import PropTypes from "prop-types";

// sin destructuring:
// const Result = (props.value) => {
// con destructuring:
const Result = ({ value }) => (
  // const {value} = props;
  // debugger;
  // console.log(`Renderización Result: ${value}`)
  <div className="result">
    <span>{value}</span>
  </div>
);
Result.propTypes = {
  //es string
  //es Requerido
  value: PropTypes.string.isRequired,
};

//Propiedades por defecto
Result.defaultProps = {
  value: "0",
};

export default Result;
