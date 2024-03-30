import React from 'react';

const SearchCriteriaItem = ({items}) =>
  <div>
    <select className="searchCriteriaItem">
      {items.map(e => <option key={e.key} value={e.value}>e.label</option>)}
    </select>
  </div>

export default SearchCriteriaItem;