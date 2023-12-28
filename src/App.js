
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Sample from './Sample';
//import Adding from './projects/Adding';
import Todo from './projects/Todo';
//import ClassComponent from './ClassComponent';
//import ColorChange from './projects/ColorChange';
// import Index from "./useEffect/4-useEffect-example-2"
//import PropsEx from './PropsEx';

function App() {
  // let employees = [
  //   {
  //     id:304,
  //     name:"Raju",
  //     age:25,
  //     place:"Hyderabad"
  //   },
  //   {
  //     id:307,
  //     name:"Harsha",
  //     age:29,
  //     place:"Hyderabad"
  //   },
  //   {
  //     id:504,
  //     name:"Sekhar",
  //     age:27,
  //     place:"Banglore"
  //   },
  //   {
  //     id:765,
  //     name:"Kiran",
  //     age:28,
  //     place:"Chennai"
  //   }
  // ]
  return (
    //<div className="App">
      <div>
        {/* <Index /> */}
        {/* {
          employees.map((data)=>{
            return <PropsEx key={data.id} id={data.id} 
            name = {data.name} age={data.age} place = {data.place}/>
          })
        } */}
        {/* <ClassComponent />
        <ColorChange /> */}
        {/* <Adding />
        <Sample /> */}
        <Todo />
    </div>
  );
}

export default App;
