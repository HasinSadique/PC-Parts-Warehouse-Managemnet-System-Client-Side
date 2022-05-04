import React from "react";

const Blog = () => {
  return (
    <div className=" py-20 ">
      <div className="text-white rounded-xl p-7 w-5/6 mx-auto bg-slate-800">
        <h1 className="text-center font-bold text-3xl mb-10">
          Question Answers
        </h1>
        <h1 className="font-bold">
          1. Difference between javascript and nodejs
        </h1>
        <p className="mx-4 mb-3 lg:mr-28 text-sm text-justify">
          JavaScript is a simple programming language that runs in any browser
          JavaScript Engine. Node JS is an interpreter or running environment
          for a JavaScript programming language, it requires libraries that can
          easily be accessed.
        </p>
        <h1 className="font-bold">
          2. When should you use nodejs and when should you use mongodb
        </h1>
        <p className="mx-4 mb-3 lg:mr-28 text-sm text-justify">
          If one wants to create a web server he/she should use Node.js. And
          MongoDB is used for storage. There are many web servers connected to
          mongoDB for storing data.
        </p>
        <h1 className="font-bold">
          3. Differences between sql and nosql databases.
        </h1>
        <p className="mx-4 mb-3 lg:mr-28 text-sm text-justify">
          SQL databases are table-based, while NoSQL databases are document,
          key-value, graph, or wide-column stores. SQL databases are better for
          multi-row transactions, while NoSQL is better for unstructured data
          like documents or JSON.
        </p>
        <h1 className="font-bold">
          4. What is the purpose of jwt and how does it work
        </h1>
        <p className="mx-4 mb-3 lg:mr-28 text-sm text-justify">
          JWT or Json Web Token is used to share security Information between a
          client and a server. JWT contains JSON objects and are encrypted using
          a cryptographic algorithm to ensure that the objects cannot be
          altered.
        </p>
      </div>
    </div>
  );
};

export default Blog;
