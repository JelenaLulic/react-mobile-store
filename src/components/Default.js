import React from "react";

export default function Default(props) {
  console.log(props);

  return (
    <div className="container">
      <div className="row">
        <div className="col-18 mx-auto text-center text-title text-uppercase pt-5">
          <h2>page not found</h2>
        </div>
      </div>
    </div>
  );
}
