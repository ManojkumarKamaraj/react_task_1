import React from "react";
import "./CompD.css";

const CompD = ({ pricetag }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4 ">
        {pricetag.map((element, index) => {
          return (
            <>
              <div key={index}>
                <div className="col">
                  <div className="container">
                    <div className="card m-auto ">
                      <div className="card-head">
                        <h6 className="card-subtitle mt-2 text-center text-body-secondary">
                          {element.type}
                        </h6>
                        <h1 className="text-center">{element.costfree}</h1>
                      </div>
                      <hr />
                      <div className="card-body">
                        {element.allowed.map((ele,ine)=>{
                          return(
                            <h5 className="card-title"><i className="fa fa-check" aria-hidden="true"></i> <strong>{ele}</strong></h5>
                          )  
                        })}
                        {element.notAllowed.map((ele,ine)=>{
                          return(
                            <h5 className="card-title text-muted"><i className="fa fa-times" aria-hidden="true"></i> {ele}</h5>
                          )  
                        })}
                        
                      </div>
                      <div className="card-footer">
                        <button className="btn btn-primary ">button</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CompD;
