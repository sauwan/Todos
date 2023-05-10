import Todos from "./MyComponents/Todos";
import Form from "./MyComponents/Form";
import Navbar from './MyComponents/Navbar';
import Try from './MyComponents/Try';
// import Footer from './MyComponents/Footer';
// import TodoItem from './MyComponents/TodoItem';

function App() {
  let list = [
    {
      sno: 55,
      Title: "Learn React ",
      Description: "Learn it from w3school and code with harry",
    },
    {
      sno: 2,
      Title: "Learn Spring ",
      Description: "Learn it from JavaTpoint",
    },
  ];
  localStorage.setItem("datasss", JSON.stringify(list));
  return (
    <>
      <Navbar />
      <Try />
      {/* <Form /> */}
      /
      
    </>
  );
}

export default App;
{
  /* <Footer /> */
}
