The solution is to add an empty dependency array `[]` to the `useEffect` hook. This ensures the effect only runs once after the initial mount.
```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []); // Empty dependency array

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
```
By adding `[]` as the second argument to `useEffect`, the effect will only execute once when the component mounts.  This prevents the infinite loop and resolves the crash.