
import { Button, Label} from "flowbite-react";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import{toast}from"react-hot-toast"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import htmlreactparser from 'html-react-parser'
import { Link } from 'react-router-dom';


function Component() {
    const navigate = useNavigate()
    const [Tofproverb, setTofproverb] = useState<string>('');
    const [Proverb, setProverb] = useState<string>('');

    const HandleFunction = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const Data = {
            Tofproverb,
            Proverb: Proverb
        }

        axios.post(`https://babystory-server.onrender.com/proverb`, Data)
            .then((respond) => {
                console.log(respond.data);
                toast.success("Successful Proverb Added")
                navigate("/Setting")
            })
            .catch((error) => {
                console.log(error)
                toast.error("This didn't  work!!!!")
            })
    }

    return (
        <div className='flex justify-center mt-8 '>
            <form onSubmit={HandleFunction} className="flex p-5 max-w-md flex-col gap-4   w-full bg-white">
            <div className='Logo font-black flex align-middle translate-x-[-25px]'>
              <img src='BabyStoryLogo.png' alt="" className='w-16 translate-y-[-5px] translate-x-3' />
              <Link to="#"><h2></h2></Link>
            </div>
                <h2 className='font-bold'>Upload Proverbs</h2>
                <div>
                    <div className="mb-2 ">
                        <Label htmlFor="title" value="Title" />
                        <input type="text" id="title" className='border md:w-[99%] w-[99%] outline-none p-2' placeholder="Title of Story" required onChange={(e) => { setTofproverb(e.target.value) }} />
                    </div>
                </div>
                <div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="Proverb" value="Your Proverb" />
                        </div>
                        <div>
                            <CKEditor
                                editor={ClassicEditor}
                                data={Proverb}
                                onChange={(_event,editor) => {
                                    setProverb(editor.getData());
                                }}  />
                        </div>
                       
                    </div>
                </div>
                <div>
                </div>
                <Button color="blue" className= 'md:w-[99%] w-[99%]  bg-blue-500 rounded-full hover:bg-blue-700 transition-all duration-500 ease-in text-white' type='submit'>UPLOAD</Button>
            </form>
        </div>
    );
}

export default Component;
