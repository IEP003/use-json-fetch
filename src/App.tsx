import './App.css'
import { DataFetching } from './component/DataFetching'

function App() {


  return (
    <>
      <DataFetching 
      url='http://localhost:7070/data'
      title='успешное получение данных'
      />
      <DataFetching 
      url='http://localhost:7070/data'
      title='получение 500 ошибки'
      />
      <DataFetching 
      url='http://localhost:7070/loading'
      title='индикатор загрузки'
      />
    </>
  )
}

export default App
