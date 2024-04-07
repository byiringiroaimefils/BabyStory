import axios from 'axios'
import { useState, useEffect } from 'react'
import NavBar from "./NavBar";
import { FC } from "react"
import ReactPlayer from "react-player"
import Load from "./Loading";

interface Story {
  id: string,
  Title: string,
  image: string,
  Decription: string
  createdAt: string


}

const Home: FC = () => {
  const alphArray = ['Aa', 'Bb', 'Cc', 'Dd', 'Ee', 'Ff', 'Gg', 'Hh', 'Ii', 'Jj', 'Kk', 'Ll', 'Mm', 'Nn', 'Oo', 'Pp', 'Qq', 'Rr', 'Ss', 'Tt', 'Uu', 'Vv', 'Ww', 'Xx', 'Yy', 'Zz']
  const [Story, setStory] = useState<Story[]>([]);
  const [Loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get("https://babystory-server.onrender.com/stories")
      .then((data) => {
        setStory(data.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log('error', error)
        setLoading(false)
      })
  }, []
  
  )
  console.log(Story)


  return (
    <div>
      <NavBar />
      <div>
        {
          Loading ? (
            <div className='flex justify-center text-center mt-56'>
              <Load/>
              </div>
          ) : (
            <div className='Container flex justify-around mt-6 w-full '>
              <div>

                {Story.map(({ id, Title, image, Decription, createdAt }) => (
                  <div key={id} className='story p-4 w-[650px] md:translate-x-10' >
                    <div className='Header '>
                      <h2 className='font-bold  text-base '>{Title}</h2>
                      <p className='text-sm font-thin text-gray-400'>Parent ( aimefils173@gmail.com ) </p> <br />
                      <img src={image} alt="" className='' />
                    </div>
                    <div className='Description mt-4 '>
                      <p>{Decription}</p>
                      <p className='text-sm font-thin text-gray-400'>{createdAt}</p> <br />
                    </div>
              
                  </div>
                ))}

              </div>
              <div className='UpdatedStory mt-5 mr-12'>
                <div className="topstory">
                  <h4 className='font-extrabold'>Top Stories</h4>
                  <p className='text-sm font-thin text-gray-400'>Lorem ipsum dolor sit amet consectetur</p>

                  <ul>
                    <li className='text-lg cursor-pointer'><span className='text-gray-400 text-2xl  '>1.</span> <a href="">Lorem ilisum dolor sit amet,</a> </li>
                    <li className='text-lg cursor-pointer'><span className='text-gray-400 text-2xl'>2.</span><a href=""> Game of choressit amet,</a></li>
                    <li className='text-lg cursor-pointer'><span className='text-gray-400 text-2xl'>3.</span> <a href="">Lorem ilisum dolor sit amet,</a> </li>
                  </ul>
                </div>
                <div className="Video mt-20 ">
                  <h4 className='font-extrabold'>Video</h4>
                  <p className='text-sm font-thin text-gray-400'>Lorem ipsum dolor sit amet consectetur</p> <br />
                  <ReactPlayer
                    className='react-player'
                    controls
                    url='https://www.youtube.com/watch?v=bisUxWGk-Nw'
                    width='120%'
                    height='200%'
                  />
                </div>
                <div className="Alphabetics mt-20">
                  <h4 className='font-extrabold '>Alphabetics</h4>
                  <p className='text-sm font-thin text-gray-400'>Lorem ipsum dolor sit amet consectetur</p>
                  <div className='grid grid-cols-6 gap-2 '>
                    {alphArray.map(letter => (
                      <button key={letter} className='border p-2 font-base hover:text-blue-500'>{letter}</button>
                    ))}
                  </div>

                </div>
              </div>
            </div>

          )
        }
      </div>
    </div>)
}


export default Home;
