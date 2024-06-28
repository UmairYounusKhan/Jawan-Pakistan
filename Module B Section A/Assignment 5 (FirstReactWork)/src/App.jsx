import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


var App =()=>{
  return(
    <div>
        <header>
        <h1>First React Website</h1>
    </header>

    <main>
        <div class="card-container">
            <div class="card">
                <h2>VITE</h2>
                <p>Vite is a fast modern build tool by Evan You, offering instant server start, lightning-fast HMR, and optimized builds with Rollup.</p>
                <img src="/vite.svg" alt="" />
            </div>
            <div class="card">
                <h2>React</h2>
                <p>
                React is a popular JavaScript library by Facebook for building user interfaces with a component-based architecture and efficient updates.</p>
                <img src="./src/assets/react.svg" alt="" />
            </div>
           
        </div>
    </main>

    <footer>
        <p>&copy; 2024 React Website</p>
    </footer>
    </div>
  )
}

export default App

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
