import { FaRegFilePdf } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { GrAppsRounded } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa";

const FoodMenu = () => {
  return (
    <section className="menu" id="menu">
    <div className="section__container menu__container">
      <div className="menu__header">
        <div>
          <p className="section__subheader">MENU</p>
          <h2 className="section__header">Our Food Menu</h2>
        </div>
        <div className="section__nav">
          <span><i className="ri-arrow-left-line"></i></span>
          <span><i className="ri-arrow-right-line"></i></span>
        </div>
      </div>
      <ul className="menu__items">
        <li>
          <img src="https://imgs.search.brave.com/Y6X3mU7aVdAMHKa21S1SFeXfWahEmFVq43MWM5KvgnE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2M0L09uY29yaHlu/Y2h1c19teWtpc3Nf/MDJfYnktZHBjLmpw/Zw" alt="menu" />
          <div className="menu__details">
            <h4>Rainbow Trout Fish</h4>
            <p>
              It is a culinary innovation that puts a unique spin on the
              beloved breakfast combination.
            </p>
          </div>
        </li>
        <li>
          <img src="/src/img/f1.jpg" alt="menu" />
          <div className="menu__details">
            <h4>Camping</h4>
            <p>
              A classic choice for your daily dose of comfort and calmness.
            </p>
          </div>
        </li>
        <li>
          <img src="https://imgs.search.brave.com/ktyOarzS1Vw2-a1MO3kChWc03ofkYLtz_jVBOfNyV9c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/NC8yOC8xMS8xOS9m/bG93ZXJzLTc0MzM3/M18xMjgwLmpwZw" alt="menu" />
          <div className="menu__details">
            <h4>Orchid</h4>
            <p>
              Our Chia Oatmeal is a wholesome nutrient-packed breakfast
              delight.
            </p>
          </div>
        </li>
        <li>
          <img src="https://imgs.search.brave.com/UHGTGuL46CNX67sfdvcDuZ4n2XbI36wPxvaxW-3wQ58/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ0/MzQ5MTYwOC9waG90/by9iYXJiZWN1ZS1n/cmlsbC1zdG92ZS1h/dC1iYWNreWFyZC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VWxJM01RX3Q4QzRl/SGFadFJDSmZudTlp/WUV5c01WU2hlNmpz/OVZJOTROUT0" alt="menu" />
          <div className="menu__details">
            <h4>Barbeque</h4>
            <p>
              Our Fruit Parfait is a delightful culinary masterpiece of
              freshness and flavor.
            </p>
          </div>
        </li>
        <li>
          <img src="/src/img/slide2.jpg" alt="menu" />
          <div className="menu__details">
            <h4>Camp fire</h4>
            <p>
              Our Marmalade Selection is a delectable medley of vibrant,
              handcrafted citrus preserves.
            </p>
          </div>
        </li>
        <li>
          <img src="https://imgs.search.brave.com/GlwWE_zLVYUo3sWWiOtgXPi4kMe_4UmdV838XI19zTs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDky/NzkxNjkzL3Bob3Rv/L3NpbGhvdWV0dGUt/b2YtdHJla2tlci1h/Z2FpbnN0LW1vdW50/YWluLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz02emptakdq/N3BzNVcwN2NLNGtY/SUdsZWI0UjFHOXJy/d1RMUFlnZEJhNFk4/PQ" alt="menu" />
          <div className="menu__details">
            <h4>Treeking</h4>
            <p>
              Our cheese plate is a masterpiece that celebrates rich and
              diverse world of cheeses.
            </p>
          </div>
        </li>
      </ul>
      <div className="menu__images">
        <img src="assets/menu-7.jpg" alt="menu" />
        <img src="assets/menu-8.jpg" alt="menu" />
        <img src="assets/menu-9.jpg" alt="menu" />
      </div>
      <ul className="menu__banner">
        <li>
          <span><i className="ri-file-text-line"></i></span>
          <FaRegFilePdf className="fi"/>
          <h4>84k</h4>
          <p>Projects are Completed</p>
        </li>
        <li>
          <span><i className="ri-user-line"></i></span>
          <FaRegUser className="fi"/>
          <h4>10M</h4>
          <p>Active Around World</p>
        </li>
        <li>
          <span><i className="ri-function-line"></i></span>
          <GrAppsRounded className="fi"/>
          <h4>02k</h4>
          <p>Categories Served</p>
        </li>
        <li>
          <span><i className="ri-lightbulb-flash-line"></i></span>
          <FaRegLightbulb className="fi"/>
          <h4>100M</h4>
          <p>Ideas Raised Funds</p>
        </li>
      </ul>
    </div>
  </section>
  )
}

export default FoodMenu
