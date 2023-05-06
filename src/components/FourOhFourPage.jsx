// error page for when a user navigates to a page that doesn't exist

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

