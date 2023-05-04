// 404Page.jsx


function FourOhFourPage() {
  return (
    <div>
      <div className="center">
        <h1>Oops!</h1>
        <p>The page you requested was not found. Let's get you back on track!</p>
      </div>
      <img className="error" src={require("../assets/running.jpg")} alt="Person running on a treadmill and the words 'Oops! The page you requested was not found. Let's get you back on track!'" />
    </div>
  );
}

export default FourOhFourPage;

// import { Link } from "react-router-dom";

// function PageNotFound() {
//     return (
//         <div className="flex">
//             <img className="error" src={require("../img/404.png")} alt="A rain cloud over an empty bucket and the words 'Oh no! This bucket is empty! 404" />
//             <Link to="/"><img className="home" src={require("../img/404-home.png")} alt="A rainbow that says 'take me home'." /></Link>
//         </div>
//     )
// }

// export default PageNotFound;
