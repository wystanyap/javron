const Home = () => {

    const handleClick = (e) => {
        console.log('Hello, Javron')
    }

    const clickAgain = (name, e) => {
        console.log('Hello' + name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => {clickAgain('jabol',e);}}>Click Again</button>
        </div>
     );
}
 
export default Home;