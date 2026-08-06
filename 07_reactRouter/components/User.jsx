import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div className="bg-cyan-400 text-3xl text-center outline-0 ">
      User : {userId}
    </div>
  );
}

export default User;
