

const Homeposts = () => {
  return (
    <div className="w-full flex mt-8 space-x-2">
    {/*left*/}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src="C:\Users\Admin\Desktop\eca\images\3a560748274b807e1fce1f1e2ff34b4a.jpg" alt=""className="h-full w-full"/>
    </div>
    {/*right*/}
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      Caring for our environment in our Day to Day life
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
        <p>@dekko36</p>
      <div className="flex space-x-2">
        <p>15/01/2024</p>
        <p>11:45</p>
      </div>
      </div>
      <p className="text-sm md:text-lg">We should take good care of our environment as it enables us to live a healthy life without any complications</p>
    </div>

    </div>
  )
}

export default Homeposts
