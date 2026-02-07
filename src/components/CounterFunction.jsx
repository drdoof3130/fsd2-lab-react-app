function CounterFunction(){
    let count=0;

    const increment = () => {
        count++;
        console.log(count);
    };

    return (
        <div>
            <h2>Functional Counter (Without State)</h2>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
export default CounterFunction;