import React from "react";

function Card() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-4">
          <div className="card h-100" >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Adani_2012_logo.png"
              className="card-img-top"
              alt="Adani "
            />
            <div className="card-body">
              <h3 className="card-title">Adani Power</h3>
              <p className="card-text">This is a </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6J0cNG1MNxlPeXlui9Yxx48eyMn6ocPtoINUA1bE&s" className="card-img-top" alt="reliance " />
            <div className="card-body">
              <h5 className="card-title">Reliance Group</h5>
              <p className="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5agtxEJ-mlX9253luLkpuEWj4oc4guj2s17gUZklEEA&s" className="card-img-top" alt="TaTa" />
            <div className="card-body">
              <h5 className="card-title">TATA</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJrIroTa8I4OQu_ek12uetKt6DOw8ar9CAYts59KqaIg&s" className="card-img-top" alt="App" />
            <div className="card-body">
              <h5 className="card-title">Apple</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
