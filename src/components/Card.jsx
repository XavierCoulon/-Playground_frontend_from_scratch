import React from "react";

function Card({ book }) {
  return (
    <div className="flex flex-col w-80 rounded overflow-hidden shadow-lg">
      <img className="" src={book.picture} alt={book.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{book.title}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {book.author.name}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {book.category.name}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {book.content}
        </span>
      </div>
    </div>
  );
}

export default Card;
