import { useState } from "react";

const Home = () => {

   // let name = 'tope';
   const [name, setName] = useState('tope');
   const [age, setAge] = useState(69);
   const [random, setRandom] = useState([4,8,12,15])

    const handleClick = () => {
        setName('koy');
        setAge(42);
        setRandom([22,44,33])
    }


    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <p>{age}</p>
            <p>{random}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;