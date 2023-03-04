import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
      </div>
      <div>
        {props.tours.map((e) => {
          return <Tour key={e.id} {...e} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
