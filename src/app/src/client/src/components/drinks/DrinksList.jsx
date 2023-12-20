import React, { useEffect, useMemo, useState } from 'react';
import _ from 'lodash';
import { DrinkItem } from './DrinkItem';

export default function DrinksList(props) {
  return (
    <div className="tab-content">
      <div id="tab-1" className="tab-pane fade show p-0 active">
        <div className="row g-4">
          {!_.isEmpty(props.drinks) &&
            _.map(props.drinks, (drink) => {
              return <DrinkItem drink={drink} />;
            })}
        </div>
      </div>
    </div>
  );
}
