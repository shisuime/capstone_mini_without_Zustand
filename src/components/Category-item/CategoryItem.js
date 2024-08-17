import Button from "../common/Button/Button.component";
import "./Category-item.styles.scss";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { title, imageUrl, id } = category;
  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        {" "}
        <Link to={`/shop/${title}`}>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p> Shop Now</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
