

const Footer = () => {
  return (
    <>
    <div className="mt-8 w-full bg-black px-8 md:px-[500px] flex md:flex-row flex-col space-y-4 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8">
      <div className="flex flex-col text-white">
        <p>Featured blogs</p>
        <p>Most viewed</p>
        <p>readers choice</p>
      </div>

      <div className="flex flex-col text-white">
        <p>Forum</p>
        <p>Support</p>
        <p>Recents</p>
      </div>

      <div className="flex flex-col text-white">
        <p>Privacy policy</p>
        <p>Terms</p>
        <p>About us</p>
        <p>Terms of service</p>
      </div>
   </div>
   <p className="py-4 pb-4 text-center text-white bg-black">All rights reserved @Environment connect</p>
   </>
   
  
  )
}

export default Footer
