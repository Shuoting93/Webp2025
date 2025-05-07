import logo from './logo.svg';
import './App.css';

const styleArgument = {fontSize:"100px",color:"red"}

const HelloCGU=()=>{
    return<h1 style={styleArgument}>hello CGU!!</h1>;
}

const changeText = (event) => {
  console.log(event.target);
  event.target.innerText = event.target.innerText + "被點了";
}

export default HelloCGU;
