import React from 'react';

// Step 1: Define the type for the props
interface GreetingProps {
  name: string; // name should be a string
}

// Step 2: Use React.FC to type the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
