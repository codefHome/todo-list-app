
import {  Routes, Route } from 'react-router-dom';
import AddTodo from "./pages/AddTodo";
import ViewTodoList from "./pages/ViewTodoList";
import Header from './pages/Header';


function App() {
 
  return (
    <>
      <Header/>
   
    <div>
    <Routes>
          <Route path="/" element={<AddTodo />} />
          <Route path="/view-songs" element={<ViewTodoList />} />
      
        </Routes>
    </div>

    </>
  
  );
}

export default App;
