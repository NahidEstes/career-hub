import React from "react";

const Blog = () => {
  return (
    <div className="custom-container">
      <h1 className="text-center  underline text-3xl font-bold">
        Blog Question and Answer:
      </h1>
      <div>
        <div className="mt-4 p-3">
          {/* ---------- First Answer ---------- */}

          <h3 className=" text-2xl font-semibold">
            1. What is the difference between props and state?
          </h3>
          <p className="mt-3 lg:w-8/12 text-lg">
            <span className="underline text-xl font-bold pr-2">Answer:</span>
            Context API makes react more effective. Actually it's main work is
            passing data one place to another place. It creates a state at the
            very top level. And any child component can access that data later,
            without disturbing the parent component. Now your top level
            component will go inside React.createContext(), stored in a variable
            called MyContext. <br /> You can use any name you want. Suppose you
            have your App component at the very top. Now you just need to bind
            that top level component with MyContext. Now you can have two types
            of elements in MyContext. <br /> One element will provide data which
            is called Provider, and another type of element which will take data
            from MyContext is called Consumer. So you will give data here, means
            this top level element of yours will provide data. So it will be
            Provider. So you need to use MyContext.Provider here.
          </p>
        </div>
        <div className="mt-4 p-3">
          {/* ---------- Second Answer ---------- */}

          <h3 className=" text-2xl font-semibold">2. What is custom hook?</h3>
          <p className="mt-3 lg:w-8/12 text-lg">
            <span className="underline text-xl font-bold pr-2">Answer:</span>I
            have little knowledge of this topic. But I'm trying explain this.
            Custom hooks are reusable functions. It is special JavaScript
            function. It improve the code readability. It also makes it easier
            to write separate unit tests for custom hooks. Finally, I want to
            say, Custom Hook can help developers save time, are reliable,
            reusable, and make the code clean.
          </p>
        </div>
        <div className="mt-4 p-3">
          {/* ---------- Third Answer ---------- */}

          <h3 className=" text-2xl font-semibold">
            2. What is useRef() and and what is this use cases?
          </h3>
          <p className="mt-3 lg:w-8/12 text-lg">
            <span className="underline text-xl font-bold pr-2">Answer:</span>
            uesRef() is a another hook of React. It helps us to directly create
            a reference to the DOM element in the functional component. It
            returns a mutable ref object. This object has a property called
            .current. The value is persisted in the refContainer.current
            property. These values are accessed from the current property of the
            returned object.
          </p>
        </div>
        <div className="mt-4 p-3">
          {/* ---------- Fourth Answer ---------- */}

          <h3 className=" text-2xl font-semibold">2. What is useMemo?</h3>
          <p className="mt-3 lg:w-8/12 text-lg">
            <span className="underline text-xl font-bold pr-2">Answer:</span>
            This hook allows us to cache the result of a calculation between
            re-renders. We can only call it at the top level of your component
            or our own Hooks. We can’t call it inside loops or conditions. If we
            need that, extract a new component and move the state into it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
