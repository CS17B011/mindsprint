import React, { useState } from "react";
import Corousel from "../corousel/Corousel";
import Jumbo from "../jumbotron/jumbotron";
import Perks from "../Perks/perk";

export default function Landing() {
  const [loading, setload] = useState(true);
  setTimeout(() => {
    setload(false);
  }, 500);
  return (
    <>
      {loading === true ? (
        <div
          className="text-center"
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
            alt="#!"
          />
        </div>
      ) : (
        <div>
          <Corousel />
          <Perks />
          <Jumbo />
        </div>
      )}
    </>
  );
}
