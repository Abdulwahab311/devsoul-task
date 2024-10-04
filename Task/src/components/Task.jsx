import React from "react";
import { GiNotebook } from "react-icons/gi";
import { GrCamera } from "react-icons/gr";
import { MdOutlineDepartureBoard } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";


function Task() {
  return (
    <>
      <div className="min-h-screen ">
        {/* Navbar Section */}
        <div className="bg-gray-50 p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-pink-600 ml-4 lg:ml-32">
            Software Company
          </h1>
          <nav className="hidden lg:flex">
            <ul className="flex gap-4 mr-10 mt-2">
              <li className="text-pink-600">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Page</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <button className="bg-pink-600 text-white py-2 px-4 rounded">
                  Get Started
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:ml-32 mt-8 lg:mt-32 lg:w-1/2">
            <div className="flex items-center">
              <hr className="w-10 h-1 bg-pink-600 mr-2" />
              <p className="ml-2">
                Welcome to <span className="text-pink-600">Ajux</span>
              </p>
            </div>
            <div className="mt-4 lg:mt-8">
              <h1 className="text-4xl lg:text-5xl font-bold">
                Impact the World
                <br />
                by Taking Action
              </h1>
              <p className="mt-4">
                Objectively foster extensible scenarios and business innovation.
                <br />
                Energistically predominate prospective experiences with
                strategic
                <br />
                initiatives.
              </p>
              <button className="bg-pink-600 text-white py-2 px-4 rounded mt-5">
                Get Started
              </button>
            </div>
          </div>
          <div className=" lg:mt-0 lg:w-1/2">
  <div className="flex flex-col lg:flex-row lg:ml-32 mt-24 ">
    <div className="flex flex-col lg:mr-2">
      <img
        className="h-48 lg:h-1/2 rounded-lg shadow-md"
        src="images/hero3.jpg"
        alt="Hero Image 1"
      />
      <img
        className="h-48 lg:h-1/2 mt-2 lg:mt-0 rounded-lg shadow-md"
        src="images/hero2.jpg"
        alt="Hero Image 2"
      />
    </div>
    <img
      className="h-96 lg:h-auto rounded-lg shadow-md"
      src="images/hero1.jpg"
      alt="Hero Image 3"
    />
  </div>
</div>

        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 lg:mt-32 mx-4 lg:ml-32 lg:mr-12">
          <div className="border-2 border-white p-4 flex flex-col justify-center items-center text-center shadow-md">
            <GiNotebook className="text-4xl mb-2" />
            <h1 className="font-bold text-lg mb-2">Business Strategy</h1>
            <p>
              A business strategy is a powerful tool for helping you reach your
              goals, defining the methods and tactics
            </p>
          </div>
          <div className="border-2 border-white p-4 flex flex-col justify-center items-center text-center shadow-md">
            <GrCamera className="text-4xl mb-2" />
            <h1 className="font-bold text-lg mb-2">UI/UX Design</h1>
            <p>
              A business strategy is a powerful tool for helping you reach your
              goals, defining the methods and tactics
            </p>
          </div>
          <div className="border-2 border-white p-4 flex flex-col justify-center items-center text-center shadow-md">
            <MdOutlineDepartureBoard className="text-4xl mb-2" />
            <h1 className="font-bold text-lg mb-2">App Development</h1>
            <p>
              A business strategy is a powerful tool for helping you reach your
              goals, defining the methods and tactics
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 lg:mt-32 mx-4 lg:ml-32 lg:mr-12">
          <div className="border-2 border-white p-4 flex flex-col justify-center items-center text-center shadow-md">
            <GiNotebook className="text-4xl mb-2" />
            <h1 className="font-bold text-lg mb-2">Business Strategy</h1>
            <p>
              A business strategy is a powerful tool for helping you reach your
              goals, defining the methods and tactics
            </p>
          </div>
          <div className="border-2 border-white p-4 flex flex-col justify-center items-center text-center shadow-md">
            <GrCamera className="text-4xl mb-2" />
            <h1 className="font-bold text-lg mb-2">UI/UX Design</h1>
            <p>
              A business strategy is a powerful tool for helping you reach your
              goals, defining the methods and tactics
            </p>
          </div>
          <div className="border-2 border-white p-4 flex flex-col justify-center items-center text-center shadow-md">
            <MdOutlineDepartureBoard className="text-4xl mb-2" />
            <h1 className="font-bold text-lg mb-2">App Development</h1>
            <p>
              A business strategy is a powerful tool for helping you reach your
              goals, defining the methods and tactics
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="flex flex-col lg:flex-row mt-24 lg:mt-32">
          <div className="lg:ml-32">
            <div className="flex items-center">
              <hr className="w-10 h-1 bg-pink-600 mr-2" />
              <p className="ml-2">About Us</p>
            </div>
            <div className="mt-4">
              <h1 className="text-4xl lg:text-5xl font-bold">
                Insights About Our
                <br />
                Company
              </h1>
              <p className="mt-4">
                Let our experts prepare a free home analysis for you! Just fill
                out our form. Surround yourself with the luxury and quality of
                one of Saskatoon’s premier home builder. At Properties we take
                pride in building you everything you need to call The Meadows
                home.
              </p>
              <div className="flex items-center mt-4">
                <hr className="w-10 text-pink-600 mr-2" />
                <p className="ml-2 text-pink-600">Learn More</p>
              </div>
              <div className="flex gap-16 mt-4">
                <div>
                  <p className="text-sm lg:text-base text-gray-500">Project</p>
                  <p className="text-3xl lg:text-4xl text-pink-600 font-bold">
                    27
                  </p>
                </div>
                <div>
                  <p className="text-sm lg:text-base text-gray-500">Campaign</p>
                  <p className="text-3xl lg:text-4xl text-pink-600 font-bold">
                    18
                  </p>
                </div>
                <div>
                  <p className="text-sm lg:text-base text-gray-500">Event</p>
                  <p className="text-3xl lg:text-4xl text-pink-600 font-bold">
                    56
                  </p>
                </div>
                <div>
                  <p className="text-sm lg:text-base text-gray-500">
                    Excellency
                  </p>
                  <p className="text-3xl lg:text-4xl text-pink-600 font-bold">
                    13
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 mr-10 lg:mt-0 lg:ml-32">
            <img
              className="h-96 lg:h-auto rounded-lg shadow-md"
              src="images/hero4.jpg"
              alt="About Image"
            />
          </div>
        </div>

        {/* Section 4: Card Section */}

        <div className="ml-4 lg:ml-32 mr-4 lg:mr-12 mt-16 lg:mt-24">
          <div className="text-center mt-4 mb-7">
            <p className="ml-2 text-pink-600">Our Team</p>
            <h1 className="text-2xl font-bold">Our Team</h1>
          </div>
          c
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="">
                <img
                  src="images/Card1.jpg"
                  alt="Card 1"
                  className="rounded-t-lg"
                />
                <div className="p-4">
                  <h5 className="text-gray-900 font-bold text-xl">
                    Mahbubar Rehman
                  </h5>
                  <p className="text-gray-600">Front-End Developer.</p>
                </div>
              </div>
            </div>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="">
                <img
                  src="images/Card3.jpg"
                  alt="Card 2"
                  className="rounded-t-lg"
                />
                <div className="p-4">
                  <h5 className="text-gray-900 font-bold text-xl">
                    Tanveer Ahmad
                  </h5>
                  <p className="text-gray-600">Product Design.</p>
                </div>
              </div>
            </div>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="">
                <img
                  src="images/Card3.jpg"
                  alt="Card 3"
                  className="rounded-t-lg"
                />
                <div className="p-4">
                  <h5 className="text-gray-900 font-bold text-xl">
                    Shakib Shariar
                  </h5>
                  <p className="text-gray-600">Web-Flow Developer.</p>
                </div>
              </div>
            </div>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="">
                <img
                  src="images/Card4.jpg"
                  alt="Card 4"
                  className="rounded-t-lg"
                />
                <div className="p-4">
                  <h5 className="text-gray-900 font-bold text-xl">
                    Rifat Sikander
                  </h5>
                  <p className="text-gray-600">WP developer.</p>
                </div>
              </div>
            </div>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="">
                <img
                  src="images/Card1.jpg"
                  alt="Card 3"
                  className="rounded-t-lg"
                />
                <div className="p-4">
                  <h5 className="text-gray-900 font-bold text-xl">
                    Rifat Sikander
                  </h5>
                  <p className="text-gray-600">Web-Flow Developer.</p>
                </div>
              </div>
            </div>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="">
                <img
                  src="images/Card4.jpg"
                  alt="Card 3"
                  className="rounded-t-lg"
                />
                <div className="p-4">
                  <h5 className="text-gray-900 font-bold text-xl">
                    Tanveer Ahmad
                  </h5>
                  <p className="text-gray-600">Web-Flow Developer.</p>
                </div>
              </div>
            </div>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="">
                <img
                  src="images/Card1.jpg"
                  alt="Card 1"
                  className="rounded-t-lg"
                />
                <div className="p-4">
                  <h5 className="text-gray-900 font-bold text-xl">
                    Mahbubar Rehman
                  </h5>
                  <p className="text-gray-600">Web-Flow Developer.</p>
                </div>
              </div>
            </div>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="">
                <img
                  src="images/Card4.jpg"
                  alt="Card 2"
                  className="rounded-t-lg"
                />
                <div className="p-4">
                  <h5 className="text-gray-900 font-bold text-xl">
                    Shakib Shariar
                  </h5>
                  <p className="text-gray-600">Web-Flow Developer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* images card */}

      <div className="flex flex-col lg:flex-row">
        <div className="mt-24 mb-10 lg:w-1/2 lg:ml-32">
          <div className="flex items-center">
            <hr className="w-10 h-1 bg-pink-600 mr-2" />
            <p className="ml-2 text-pink-600">Portfolio</p>
          </div>
          <div className="mt-4">
            <h1 className="text-4xl lg:text-5xl font-bold">The Best Folio</h1>
            <p className="mt-4">
              Let our experts prepare a free home analysis for you! Just fill
              out our
              <br />
              form. Surround yourself with the luxury and quality of one of
              <br />
              Saskatoon’s premier home builder.
            </p>
            <div className="flex items-center mt-4">
              <hr className="w-10 bg-pink-600 mr-2" />
              <p className="ml-2 text-pink-600">Learn More</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center ml-28 mr-10">
        <div className="w-1/2 sm:w-1/3 lg:w-full p-2">
          <img src="images/view1.jpg" alt="view1" className="rounded-lg" />
        </div>
        <div className="w-1/2 sm:w-1/3 lg:w-full p-2">
          <img src="images/view2.jpg" alt="view2" className="rounded-lg" />
        </div>
      </div>
      <div className="flex justify-center ml-28 mr-10">
        <div className="w-1/2 sm:w-1/3 lg:w-full p-2">
          <img src="images/view3.jpg" alt="view1" className="rounded-lg" />
        </div>
        <div className="w-1/2 sm:w-1/3 lg:w-full p-2">
          <img src="images/view4.jpg" alt="view3" className="rounded-lg" />
        </div>
      </div>
      <div className="flex justify-center ml-28 mr-10">
        <div className="w-1/2 sm:w-1/3 lg:w-full p-2">
          <img src="images/view5.jpg" alt="view1" className="rounded-lg" />
        </div>
        <div className="w-1/2 sm:w-1/3 lg:w-full p-2">
          <img src="images/view6.jpg" alt="view3" className="rounded-lg" />
        </div>
      </div>

      {/* scription  */}
      <div className="ml-32 mt-10">
        <div className="flex items-center">
          <hr className="w-10 h-1 bg-pink-600 mr-2" />
          <p className="ml-2 text-pink-600">Pricing</p>
        </div>
        <div>
          <h1 className="font-bold text-2xl">The Best Pricing Plan</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mr-10 mt-10 mb-10">
          <div className="bg-white rounded-lg border border-gray-200 shadow-md p-6">
            <div className="p-4">
              <h5 className="font-bold text-2xl">Basic</h5>
              <p className="text-gray-500 text-[12px]">Most popular</p>
            </div>
            <div className="p-4 text-center">
              <h5 className="text-2xl font-bold">$2.46/mo</h5>
              <p className="text-gray-500 text-[12px] mt-3">
                yearly{" "}
                <span className="bg-slate-400 text-white p-1 rounded">
                  15% OFF
                </span>
              </p>
            </div>
            <div className="p-4">
              <h5 className="text-gray-700">Unlimited Product</h5>
              <h5 className="text-gray-700">Unlimited Product</h5>
              <h5 className="text-gray-700">Unlimited Product</h5>
              <h5 className="text-gray-700">Unlimited Product</h5>
              <div className="flex justify-center">
                <button className="bg-black text-white rounded p-2 mt-4 mx-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="bg-pink-600 rounded-lg border border-gray-200 shadow-md p-6 text-white">
            <div className="p-4">
              <h5 className="font-bold text-2xl">Standard</h5>
              <p className="text-gray-200 text-[12px]">recomended</p>
            </div>
            <div className="p-4 text-center">
              <h5 className="text-2xl font-bold">$5.75/mo</h5>
              <p className="text-gray-200 text-[12px] mt-3">
                yearly <span className="bg-slate-400 p-1 rounded">15% OFF</span>
              </p>
            </div>
            <div className="p-4">
              <h5>Unlimited Product</h5>
              <h5>Unlimited Product</h5>
              <h5>Unlimited Product</h5>
              <h5>Unlimited Product</h5>
              <div className="flex justify-center">
                <button className="bg-black text-white rounded p-2 mt-4 mx-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 shadow-md p-6">
            <div className="p-4">
              <h5 className="font-bold text-2xl">Premium</h5>
              <p className="text-gray-500 text-[12px]">Best Value</p>
            </div>
            <div className="p-4 text-center">
              <h5 className="text-2xl font-bold">$10.25/mo</h5>
              <p className="text-gray-500 text-[12px] mt-3">
                yearly{" "}
                <span className="bg-slate-400 text-white p-1 rounded">
                  15% OFF
                </span>
              </p>
            </div>
            <div className="p-4">
              <h5 className="text-gray-700">Unlimited Product</h5>
              <h5 className="text-gray-700">Unlimited Product</h5>
              <h5 className="text-gray-700">Unlimited Product</h5>
              <h5 className="text-gray-700">Unlimited Product</h5>
              <div className="flex justify-center">
                <button className="bg-black text-white rounded p-2 mt-4 mx-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}

      <div className="bg-pink-600 flex flex-col items-center py-6 mt-32">
  <h1 className="text-center text-white text-3xl font-bold ">Subscribe To The Newsletter</h1>
  <p className="text-center text-white mb-4 mt-4 text-[14px]">
    Subscribe is an option offered by product vendors or service<br/> providers that allows customers.
  </p>
  <div className="flex flex-col items-center">
    <input className="p-2 mb-3 w-64 text-center rounded" type="text" />
    <button className="bg-white text-pink-600 py-2 px-4 rounded mt-2 font-bold">
      Subscription
    </button>
  </div>
</div>

<div className="bg-black text-white flex flex-col md:flex-row gap-10 md:gap-40 p-10">
      <div className="mb-10 md:mb-0">
        <ul>
          <li className="text-pink-600 text-2xl font-bold">Software Company</li>
          <li className="mt-3">
            Creative Design & Development Agency<br />
            in Canada.
          </li>
          <div className="flex mt-3 gap-2">
            <FaFacebookF className="bg-white text-black rounded p-1" />
            <CiYoutube className="bg-white text-black rounded p-1" />
            <FaInstagram className="bg-white text-black rounded p-1" />
          </div>
        </ul>
      </div>
      <div className="mb-10 md:mb-0">
        <p className="text-2xl font-bold">Support</p>
        <p className="mt-3">About</p>
        <p>UX/UI Design</p>
        <p>Graphic Design</p>
        <p>Business Strategy</p>
        <p>App Development</p>
      </div>
      <div className="mb-10 md:mb-0">
        <p className="text-2xl font-bold">Services</p>
        <p className="mt-3">Blog</p>
        <p>Portfolio</p>
        <p>Service</p>
        <p>Pricing Plan</p>
        <p>Contact Us</p>
      </div>
      <div>
        <p className="text-2xl font-bold">Contact</p>
        <p className="mt-3">437 Melborne Ave #4, NY 13253, Australia</p>
        <p>1-976-1178-9535</p>
        <p>hello.Ajux@gmail.com</p>
      </div>
    </div>
    </>
  );
}

export default Task;
