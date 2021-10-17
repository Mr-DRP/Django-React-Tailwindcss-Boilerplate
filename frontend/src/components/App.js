import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="flex h-screen text-xl md:text-lg">
      <div className="m-auto text-center">
      Made with ❤️ using 
    <a href="https://docs.djangoproject.com/en/3.2/" className="font-bold text-django" target="_blank"> Django</a>,
        <a href="https://reactjs.org/docs/getting-started.html" className="font-bold text-react" target="_blank"> React</a> and 
        <a href="https://tailwindcss.com/docs" className="font-bold text-tailwind" target="_blank"> Tailwind CSS</a>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
