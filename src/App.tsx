import Header from './Components/Header'
import AddArea from './Components/AddArea'


const App = ()=> {
  
  return (
    <div className='bg-gradient-to-r bg-darkPrimary min-h-screen p-5'>
     <div className='m-auto max-w-screen-md'>
        <Header/>
      <AddArea/>
     </div>
    </div>
  )
}

export default App