import React from "react";

interface IProps {
  onClickHandler: () => void;
  value: string;
}

const Squere = (props: IProps) => {
  return (
    <div className="squere" onClick={props.onClickHandler}>
      <h1>{props.value}</h1>
    </div>
  );
};

export default Squere;
