import React from 'react';

const SearchBox = ({ placeholder, onChange, setModel, value }) => (
  <div className='row filter-row' style={{ width: '100%', position: 'static' }}>
    <div className='input-group filter'>
      <input
        type='text'
        name='query'
        value={value}
        style={{ width: '100%', height: '40px' }}
        placeholder={placeholder}
        onChange={(e) => setModel(e.currentTarget.value)}
      />
    </div>
  </div>
);

export default SearchBox;
