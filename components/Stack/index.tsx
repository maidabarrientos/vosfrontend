import Image from "next/image";


const Stack = () => {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Revolutionary Venture Tools
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <a href="https://www.vnoc.com">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/images/brands/vnoc.svg"
              alt="VNOC"              
            />
            </a>
            <a href="https://www.contrib.com">
          
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/images/brands/contrib.svg"
              alt="Contrib"
              
            />
            </a>
            <a href="https://www.referrals.com">
          
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/images/brands/referrals.svg"
              alt="Referrals"
              
            />
            </a>
            <a href="https://www.realtydao.com">
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/images/brands/realtydao.svg"
              alt="RealtyDao"
              
            />
            </a>
            
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/images/brands/aws.svg"
              alt="AWS"
              
            />
            
          </div>
        </div>
      </div>
    )
  }
  
export default Stack;
