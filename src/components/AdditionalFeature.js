import React from 'react';

const AdditionalFeature = ({name,price, buyItem}) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => buyItem(name)}>Add</button>
      {name} (+{price})
    </li>
  );
};

export default AdditionalFeature;

