import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  const {data, loading, error} = useFetch("https://localhost:8800/api/hotels/countByCity?cities=berlin,madrid,lagos,stuttgart,paris")

  console.log(data)

  return (
    <div className="featured">
      { loading ? (
        "Loading please wait ..."
      ) : (
      <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt="Berlin"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data?.Berlin || 0} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt="Madrid"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data?.Madrid || 0} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt="Lagos"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Lagos</h1>
              <h2>{data?.Lagos || 0} properties</h2>
            </div>
          </div>
      </>
    )}
    </div>
  );
};

export default Featured;
