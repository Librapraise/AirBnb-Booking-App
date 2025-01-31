import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {

  const { data, loading, error } = useFetch("https://localhost:8800/api/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? ("Loading please wait ...") : (
        <>
        {data.map((item, i) => (
          <div className="fpItem" key={i}>
            <img
              src={item.photos[0]}
              alt=""
              className="fpImg"
            />
            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
            <span className="fpPrice">Starting from ${item.price}</span>
            {item.rating && <div className="fpRating">
              <button>{item.rating}</button>
              <span>{item.rating > 7 ? "Excellent" : "Good"}</span>
            </div>}
          </div>
        ))}
        </>
        )}
    </div>
  );
};

export default FeaturedProperties;
