import axios from "axios";
import { useQuery } from "react-query";

const fetchBooks = async () => {
  const { data } = await axios.get("http://localhost:5000/api/v1/book");
  return data;
};

function BooksList() {
  const { isLoading, data } = useQuery(["books"], fetchBooks);

  if (isLoading) return "Loading";

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="block text-gray-700 text-lg font-bold mb-2">
        List of books
      </h1>
      <ul>
        {data.map((book) => (
          <li key={book.id}>
            {book.title} - {book.content} - {book.category.name} -{" "}
            {book.author.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksList;
