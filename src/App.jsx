import React from "react";
import CompD from "./Components/ComponentD/CompD";

const App = () => {
  const pricetag =[
    {
      type : "FREE",
      costfree : "$0/month",
      allowed : [
        "Single User",
        "50GB",
        "Unlimited Public Projects",
        "Comunity Access"
      ],
      notAllowed:[
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
        "Monthly Status Reports"
      ]
    },
    {
      type : "PLUS",
      costfree : "$9/month",
      allowed : [
        "Single User",
        "50GB",
        "Unlimited Public Projects",
        "Comunity Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain"
      ],
      notAllowed:["Monthly Status Reports"]
    },
    
    {
      type : "PRO",
      costfree : "$49/month",
      allowed : [
        "Single User",
        "50GB",
        "Unlimited Public Projects",
        "Comunity Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
        "Monthly Status Reports"
      ],
      notAllowed:[]
    }
  ];
  // <i class="fa fa-check" aria-hidden="true"></i>
  return (
    <>
      <CompD pricetag={pricetag} />
    </>
  );
};

export default App;
