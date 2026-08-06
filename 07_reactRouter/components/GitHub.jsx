import React, { useEffect, useState } from "react";

function GitHub() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Mangesh-s5")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-cyan-700 text-white text-3xl p-4">
      GitHub Folllowers: {data.followers}
      <img src={data.avatar_url} alt="Git pitch" width={300} />
    </div>
  );
}

export default GitHub;
