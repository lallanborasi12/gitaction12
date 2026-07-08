
import React from 'react';
import { BeatLoader } from 'react-spinners'
const Loders = ({ isLoading }) => {
  return (

    <div open={isLoading} >
      <BeatLoader
        cssOverride={{
          height: '100vh',
          width: '100vw',
          display: "flex",
          background: "#06060645",
          justifyContent: "center",
          alignItems: "center",
        }}
        size={30}
        color="#C4A94F"
        speedMultiplier={1}
        loading={isLoading}
      />
    </div>

  );
};

export default Loders;