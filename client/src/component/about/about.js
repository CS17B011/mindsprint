import React, { useState } from "react";
import Pattern from "./pattern/pattern";

import Sponsers from "./sponsers/sponsers";
import Gallery from "./gallery/gallery";
import Broucher from "./broucher/broucher";
const About = () => {
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
          <Broucher />
          <Pattern />
          <Gallery />
          <Sponsers />
        </div>
      )}
    </>
  );
};

export default About;
