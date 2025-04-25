import {Link} from 'react-router-dom'
function Home() {
  fetch('https://psychic-goggles-v66w5wpp97563p666-5000.app.github.dev/working')
  return (
    <div>
      <div className="w-[100vw] h-[70vh] flex flex-col gap-[20px] justify-center  items-center"> 
        <h1 className="text-7xl text-yellow-800 font-bold text-center">
          Welcome to the Soil Gyan
        </h1>
        <p className="text-xl font-roboto">
          Keep your field's soil firtile and healthy by learning about it and giving it what is needed.
          <br></br> <Link to='/register'>Sign up </Link> right now
        </p>
      </div>
    </div>
  );
}
export default Home;