import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';

import { buyItem } from '../actions';

const AdditionalFeatures = ({ additionalFeatures }) => {
  // console.log(additionalFeatures);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map((item) => (
            <AdditionalFeature key={item.id} name={item.name} price={item.price} buyItem={buyItem} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures,
  };
};

export default connect(mapStateToProps, { buyItem })(AdditionalFeatures);
