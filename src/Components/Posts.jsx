// import { useState, useEffect } from "react";

const Posts = ({ results, loading }) => {
  if (loading) {
    return <p> loading...</p>;
  }
  return (
    <div>
      <ul className="list-comics">
        {results.map((result) => {
          <li key={result.id}>{result.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Posts;
