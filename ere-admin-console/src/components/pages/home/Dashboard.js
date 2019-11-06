import React from 'react';
import SummaryWidget from "../../widgets/SummaryWidget";

const Dashboard = () => 
<section className="">
    <div className="row">
      <div className="col s12 m4">
        <SummaryWidget />
      </div>
      <div className="col s12 m4">
        <SummaryWidget />
      </div>
      <div className="col s12 m4">
        <SummaryWidget />
      </div>
    </div>
</section>


export default Dashboard;