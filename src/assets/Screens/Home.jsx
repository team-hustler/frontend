import React from "react";
import group from "../Images/group-1.png";
import card from "../Images/card.png";
import Carausel from "../Components/Carausel";
import children from "../Images/children.jpg";
import { Link } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
function Section({ reverse, title, image = children, link = "#" }) {
  return (
    <div
      className={`flex flex-col mt-5 bg-white mb-8 drop-shadow-lg rounded-md p-3 ${
        reverse && "justify-items-end items-end"
      } `}
    >
      <img src={image} className=" rounded-md" alt="" />
      <h1 className={`mt-3 text-dgreen ${reverse && "text-right"}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        corporis dignissimos tenetur beatae eaque deserunt autem omnis quos.
        Accusantium quod veniam, eum ipsa velit ad similique optio! Nihil, ipsa
        esse.
      </h1>
      <Link to={link}>
        <button className=" bg-lgreen text-white w-max px-5 my-3 py-2">
          {title}
        </button>
      </Link>
    </div>
  );
}
function Learn({ image = "https://source.unsplash.com/random/300x300" }) {
  return (
    <div className=" border-gray-100 bg-white border-2 p-4 drop-shadow-3xl rounded-md flex flex-col items-center justify-center mb-8 ">
      <img src={image} className="drop-shadow-lg w-96 " alt="" />
      <h1 className="text-md mt-3 text-black">
        Know about the condition of the street children
      </h1>
      <button className="bg-lgreen text-white px-5 my-2 py-2">
        Learn More
      </button>
    </div>
  );
}
const Home = () => {
  return (
    <div className="bg-dgreen w-full md:w-[30rem] flex flex-col  items-center">
      <div className="w-full overflow-hidden  drop-shadow-lg  ">
        <Carausel />
      </div>
      <h1 className="text-xl font-bold text-white my-5">
        Education for Street Children
      </h1>

      <Learn image="https://myrepublica.nagariknetwork.com/uploads/media/street-children-04.jpg?fbclid=IwAR1HhOqaL-ovgcqVxlG56-9exU4ep_zbiYVcH-OpOEBPpKLyGQzMI68zqDY" />
      <Learn image="https://www.thedailystar.net/sites/default/files/feature/images/happy_life.jpg?fbclid=IwAR045P5n2JQOA6kbARiG7kwLRAtuz8P8CDr6OuSpcHl5SvNZ6H5tOwnVYDA" />
      <Learn image="http://volunteersummernepal.org/wp-content/uploads/2011/12/street-children.jpg?fbclid=IwAR3pMSFWpz-OT3QJAfs8zDoz6dJ0o7-kqL64a0sk-mjxu79hQJ90z9WQdso" />
      <div className="bg-white relative mt-20 flex flex-col px-11 items-center justify-center">
        <div className="flex flex-col bottom-7 relative   items-center justify-center">
          <img src={group} className=" rounded-lg drop-shadow-xl" alt="" />
          <div className="absolute flex flex-col items-center justify-center">
            <h1 className=" w-3/4 text-center text-3xl font-bold text-white">
              Our Contribution Towards Street Children
            </h1>
            <button className=" bg-lgreen text-white px-5 my-3 py-2">
              Learn More
            </button>
          </div>
        </div>
        <Section reverse={false} title={"Donate Clothes"} />
        <Section
          reverse={true}
          title={"Health Camp for Children"}
          image="https://thedailynewnation.com/library/1425130723_6.jpg?fbclid=IwAR0Fr070gk3Ja6oeC08T21AD8aRdQKyLfe-k5h47ulNu2KCSg9MXyXjg9KU"
        />
      </div>
      <div className="mt-14 flex flex-col justify-center items-center">
        <img
          src={card}
          className="w-9/12 drop-shadow-3xl rounded-md mb-5 "
          alt=""
        />
        <img
          src={card}
          className="w-9/12 drop-shadow-3xl rounded-md mb-5 "
          alt=""
        />
        <img
          src={card}
          className="w-9/12 drop-shadow-3xl rounded-md mb-5 "
          alt=""
        />
      </div>
      <div className="relative ">
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Home;
