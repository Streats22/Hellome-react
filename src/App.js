import Card from "./Card";

import "./App.css";
const App = () =>{
    const click = () => {
        console.log("ik ben geklikt!");
    }

    const random = () =>{
     console.log(Math.random());
    }
    const sum = () =>{
        console.log(63746873 + 67248);
    }
    return(
        <>
            <Card mouseclick ={click} />
            <Card mouseclick ={random} text="Test text" />
            <Card mouseclick ={sum} title="3e kaart" text="Dit is een test" />
        </>
    );
}


export default App;