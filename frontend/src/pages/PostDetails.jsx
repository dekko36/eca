import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {BiEdit} from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'


const PostDetails = () => {
  return (
    <div>
        <Navbar/>
        <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
         <h1 className="text-2xl font-bold text-black md:text-3xl">Caring for our environment in our Day to Day life</h1>
        <div className="flex items-center justify-center space-x-2">
        <p><BiEdit/></p>
        <p><MdDelete/></p>
        </div>
        </div>  
        <div className="flex items-center justify-between mt-2 md:mt-4" >
        <p>@dekko36</p>
      <div className="flex space-x-2">
        <p>15/01/2024</p>
        <p>11:45</p>
        </div>  
        </div>
        <img src="C:\Users\Admin\Desktop\eca\images\3a560748274b807e1fce1f1e2ff34b4a.jpg" className="w-full mx-auto mt-8" alt=""/>
        <p className="mx-auto mt-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories:</p>
            <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">conservation</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">Waste management</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">Eco-Friendly products</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">Environmental Education</div>
        </div>
        </div>
        <div className="flex flex-col mt-4">
        <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
        {/*comments*/}
        <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
        <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-600">@dekko36</h3>
        <div className="flex justify-center items-center space-x-4">
            <p className="text-gray-500 text-sm">15/01/2024</p>
            <p className="text-gray-500 text-sm">11:45</p>
            <div className="flex items-center justify-center space-x-2">
                <p><BiEdit/></p>
                <p><MdDelete/></p>
            </div>
        </div>
        </div>
        <p className="px-4 mt-4">Nice Information.</p>

        </div>

        {/*comments*/}
        <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
        <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-600">@dekko36</h3>
        <div className="flex justify-center items-center space-x-4">
            <p className="text-gray-500 text-sm">15/01/2024</p>
            <p className="text-gray-500 text-sm">11:45</p>
            <div className="flex items-center justify-center space-x-2">
                <p><BiEdit/></p>
                <p><MdDelete/></p>
            </div>
        </div>
        </div>
        <p className="px-4 mt-4">Nice Information.</p>

        </div>

        </div>
        {/* write a comment */}
        <div className="w-full flex flex-col mt-4 md:flex-row">
            <input type="text" placeholder="Write a comment" className="md:w-[80%] outline-none px-4 mt-4 md:mt-0"/>
            <button className="bg-black text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">Add Comments</button>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default PostDetails