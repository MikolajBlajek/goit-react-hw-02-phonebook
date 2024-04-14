import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <div style={{ width:' 200px', margin: '20px 20px 20px 0px',}}>
      Filter contacts by name: <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default Filter;
