import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>Not found</h1>
      <h2>The page you are looking for does not exist :)</h2>
      <Link href="/">Return to Home Page</Link>
    </div>
  );
};

export default NotFound;
