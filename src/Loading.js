import React, { useState } from "react";

const Loading = () => {
  const [dot, setDot] = useState(false);
  const [secondDot, setSecondDot] = useState(true);

  setTimeout(() => {
    setDot(!dot);
  }, 800);

  setTimeout(() => {
    setSecondDot(!secondDot);
  }, 1500);

  return (
    <div className="loading">
      <h1>
        <p>
          Loading
          <p>
            .{dot && "."}
            {secondDot && "."}
          </p>
        </p>
      </h1>
    </div>
  );
};

export default Loading;
