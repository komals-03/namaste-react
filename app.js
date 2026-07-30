    const heading = React.createElement('h1', {id: 'heading'}, 'Hello from REACT')
    const root = ReactDOM.createRoot(document.getElementById('root'));


    console.log(heading); //returns object
    root.render(heading);