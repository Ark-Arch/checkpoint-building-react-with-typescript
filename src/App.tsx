import './App.css'
import Greeting from './components/Greeting'; // Import Greeting component
import Counter from './components/Counter';   // Import Counter component


const App: React.FC = () => {

  return (
    <>
      
      {/* Greeting component with a prop passed */}
      <Greeting name="John" />
      
      <hr />

      {/* Counter component to show and increment count */}
      <Counter />

    </>
  )
}

export default App
