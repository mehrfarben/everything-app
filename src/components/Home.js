import { Outlet, Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className='app-body'>
        <Link to='/Quiz'>
          <button className='app1 app'>Quiz</button>
        </Link>
        <Link to='/Photos'>
          <button className='app2 app'>Photos</button>
        </Link>
        <Link to='/IdeaGenerator'>
          <button className='app3 app'>Idea Generator</button>
        </Link>
      </div>
      <Outlet />
    </>
  )
}

export default Home
