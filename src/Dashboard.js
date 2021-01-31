import React from "react";
import MemberCard from "./Profile/Main/MemberCard";
import "./Dashboard.css";
const Dashboard = ({ team }) => {
  const handelName = (myname) => {
    alert(`Hello I am ${myname}`);
  };

  return (
    <>
      <div className="brca">
        {team.map((member, i) => (
          <MemberCard member={member} key={i} handelName={handelName} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;