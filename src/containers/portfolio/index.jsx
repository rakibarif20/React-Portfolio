import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { AiFillProject } from "react-icons/ai";
import { filterOption, portfolioData } from "./utiles";
import "./style.scss";

const Portfolio = () => {
  const [filterValue, setFilterValue] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleFilter = (id) => {
    setFilterValue(id);
  };
  console.log(filterValue);
  const filterPortfolioData =
    filterValue === 1 ? portfolioData : portfolioData.filter((item) => item.selectionID === filterValue);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent headerText="My Portfolio" icon={<AiFillProject size={35} />} />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterOption.map((item) => (
            <li onClick={() => handleFilter(item.id)} key={item.id}
            className={item.id === filterValue ? 'active' : '' }
            >
              {item.label}
              {/* {console.log(item.id)} */}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filterPortfolioData.map((item, key) => (
            <div
              onMouseEnter={() => setHoveredIndex(key)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={key}
              className="portfolio__content__cards__item"
            >
              {/* {console.log(key)} */}
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} alt="project image" />
                </a>
              </div>
              <div className="overlay">
                {hoveredIndex === key && (
                  <div>
                    <p>{item.projectName}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
