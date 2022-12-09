import axios from "axios";
import { useQuery } from "react-query";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const fetchBooks = async () => {
  const { data } = await axios.get("http://localhost:5000/api/v1/book");
  return data;
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function BooksList() {
  const { isLoading, data } = useQuery(["books"], fetchBooks);

  if (isLoading) return "Loading";

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="block text-gray-700 text-lg font-bold mb-2">
        List of books
      </h1>

      <Carousel responsive={responsive} infinite={true}>
        {data.map((book) => (
          <Card book={book} />
        ))}
      </Carousel>
    </div>
  );
}

export default BooksList;
