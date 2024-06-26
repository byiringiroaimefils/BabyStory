import { FC } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from "./NavBar";
import Load from "./Pages/Loading";
import { MdThumbUp, MdThumbDown } from "react-icons/md";



interface Proverb {
  id: string,
  TitleofProverb: string,
  Proverb: string,
  createdAt: string,
}


const Proverb: FC = () => {
  const [Proverb, setProverb] = useState<Proverb[]>([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://babystory-server.onrender.com/proverbs")
      .then((data) => {
        setProverb(data.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log('error', error)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <NavBar />
      <div className='w-Full mt-5 ' >
        <div className='my-20'>
          {
            Loading ? (
              <div className='flex justify-center text-center mt-56'>
                <Load />
              </div>
            ) : (
              <div>
                {
                  Proverb.map(({ id, TitleofProverb, Proverb, createdAt }) => (
                    <div key={id} className='ml-10 mr-10'>
                      <div className='Header '>
                        <h2 className='font-bold  text-base '>{TitleofProverb}</h2>
                      </div>
                      <div className='Description mt-2 '>
                        <p dangerouslySetInnerHTML={{ __html:Proverb }}/>
                        <p className='text-sm font-thin text-gray-400'>{new Date(createdAt).toString().replace(/\sGMT.*$/, '')}</p> <br />
                      </div>
                      <div className="icons flex gap-2 mb-5">
                        <MdThumbUp /><span className='translate-y-[-6px]'>0</span><MdThumbDown /><span className='translate-y-[-6px]'>0</span>
                      </div>
                    </div>
                  ))
                }
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}
export default Proverb;