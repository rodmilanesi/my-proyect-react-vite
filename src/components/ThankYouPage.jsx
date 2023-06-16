import React from "react";

const ThankYouPage = () => {
  return (
    <div className="thankPage">
      <div className="thankContainer">
        <div className="thankPageContainer">
          <div className="headerThankYou">
            <h1>Gracias por tu Compra</h1>
            <div className="idOrder">
              <h4>El Id de tu compra es:</h4>
              <p>
                <b>asdasdasd</b>
              </p>
            </div>
          </div>
          <hr />
          <div className="bodyThankPage">
            <h3>Tus Elementos son: </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
