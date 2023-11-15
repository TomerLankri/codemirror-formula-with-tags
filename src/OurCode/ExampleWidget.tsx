import React from 'react';

interface MyWidgetProps {
  content: string;
}
//@dotun this is an example widget that is for base reference. Just creating a tsx span and dropdown for now.
const MyWidget: React.FC<MyWidgetProps> = ({ content }) => {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
      <span
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '2px 4px',
          marginRight: '5px',
          borderRadius: '4px'
        }}
      >
        {content}
      </span>
      <select>
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
      </select>
    </div>
  );
};

export default MyWidget;
