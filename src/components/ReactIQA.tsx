const ReactIQA = () => {
  return (
    <div className="container">
      <h1>Important React Interveiw Questions</h1>
      <div>
        <h3>1)Hooks:</h3>
        <p>
          <b>useState: </b> Manages state in functional components.
        </p>
        <p>
          <b>useEffect: </b> Handles side effects in functional components.
        </p>
        <p>
          <b>useContext: </b> Accesses the context in functional components.
        </p>
        <p>
          <b>useReducer: </b> Manages complex state logic with a reducer
          function.
        </p>
        <p>
          <b>useReducer: </b> Manages complex state logic with a reducer
          function.
        </p>
        <p>
          <b>useMemo: </b> Memoizes values to optimize performance.
        </p>
        <p>
          <b>useCallback: </b> Memoizes callback functions to prevent
          unnecessary renders.
        </p>
        <p>
          <b>useRef: </b> Creates a mutable object that persists between
          renders.
        </p>
      </div>
      <div>
        <h3>2) Higher Order Components (HOC):</h3>
        <p>
          <b>What?: </b> Functions that take a component and return an enhanced
          version.
        </p>
        <p>
          <b>When?: </b> Reuse component logic, share code, or manipulate
          component behavior.
        </p>
        <p>
          <b>Why?: </b> Promotes code reusability and separation of concerns.
          behavior.
        </p>
        <p>
          <b>How?: </b> Wrap a component with a function that adds or modifies
          its behavior.
        </p>
      </div>
      <div>
        <h3>3) Life Cycle Methods of Components:</h3>
        <p>
          <b>Class Components: </b> Traditional React components using ES6
          classes.
        </p>
        <p>
          <b>Mounting: </b> Component is being created and inserted into the
          DOM.
        </p>
        <p>
          <b>Mounting: </b> Component is being created and inserted into the
          DOM.
        </p>
        <p>
          <b>Updating: </b> Component is being re-rendered as a result of
          changes.
        </p>
        <p>
          <b>Unmounting: </b> Component is being removed from the DOM.
        </p>
      </div>
      <div>
        <h3>4) State management (all about data):</h3>
        <p>
          <b>State/Props: </b> Internal state for a component/external data
          passed to a component.
        </p>
        <p>
          <b>Props drilling: </b> Passing props through multiple layers of
          components.
        </p>
        <p>
          <b>Context: </b>Provides a way to pass data through the component tree
          without passing props.
        </p>
      </div>
      <h3> 5) Redux or Zustand:</h3>
      <p>
        <b>How redux works?: </b>Centralized state management using actions and
        reducers.
      </p>
      <p>
        <b> Why?: </b>For managing complex application states.
      </p>
      <p>
        <b> When?: </b>In large applications with a need for a single source of
        truth. Redux Toolkit
      </p>
      <p>
        <b> RTK: </b>Simplifies Redux setup and usage.
      </p>
      <div>
        <h3>6) Custom Hooks: When to use?:</h3>
        <p>Extracting and reusing component logic.</p>
        <p>
          <b> Code: </b> Functions prefixed with "use" returning stateful logic.
        </p>
        <p>
          <b>Why?: </b> Enhances code organization, reusability, and
          readability.
        </p>
      </div>
      <div>
        <h3>7) Lazy Loading: </h3>
        <p>
          <b>Code splitting: </b> Breaking down the application into smaller
          parts.
        </p>
        <p>
          <b>Chunking: </b> Loading only the necessary code chunks.
        </p>
        <p>
          <b>Suspense: </b> Pausing rendering until a component is ready.
        </p>
      </div>
      <div>
        <h3> 8) Virtual DOM:</h3>
        <p>
          <b>Reconciliation Algorithm: </b> Efficiently updates the UI based on
          state changes.
        </p>
        <p>
          <b>React Fiber: </b> A reimplementation of React's core algorithm.
        </p>
        <p>
          <b>Renders: </b> The process of updating the virtual DOM. Diff
          algorithm: Compares the previous and current state to determine
          changes.
        </p>
        <p>
          <b>How does render work?: </b> Updating the UI based on virtual DOM
          changes.
        </p>
      </div>
      <div>
        <h3>9) SSR vs CSR (important): </h3>
        <p>
          <b> What?: </b> Server-Side Rendering vs. Client-Side Rendering.
        </p>
        <p>
          <b> Difference: </b> Where rendering occurs - server or client.
        </p>
        <p>
          <b> SEO and performance (SSR): </b> Improved search engine
          optimization and initial load speed.
        </p>
      </div>
      <div>
        <h3>10) Routing (Role-based access control-RBAC): </h3>
        <p>
          <b> react-router: </b> Library for handling navigation in React
          applications. How do you manage protected
        </p>
        <p>
          <b> routes?: </b> Utilize authentication and authorization checks.
        </p>
        <p>
          <b> How do you handle routes?: </b> Define routes and components for
          navigation.
        </p>
        <p>
          <b>Query params: </b>
          Additional information passed in the URL.
        </p>
        <p>
          <b>Dynamic routing: </b>
          Creating routes dynamically based on data.
        </p>
      </div>
      <div>
        <h3> 11) Testing: </h3>
        <p>
          <b> React Testing Library: </b>
          Testing library for React applications.
        </p>
        <p>
          <b> Unit Testing: </b>
          Testing individual units of code.
        </p>
        <p>
          <b> Hack for interview: </b>
          Emphasize writing testable code and demonstrate test cases.
        </p>
      </div>
      <div>
        <h3>12) Async Tasks: API Calls:</h3>
        <p>Fetching data from external sources.</p>
        <p>
          <b>useEffect in depth:</b>Managing side effects, including async
          operations.
        </p>
        <p>
          <b>Events: </b>Handling asynchronous events.
        </p>
        <p>
          <b>Promises: </b>A pattern for handling asynchronous operations.
        </p>
        <p>
          <b>setTimeout: </b>Delaying the execution of code.
        </p>
      </div>
      <div>
        <h3>
          13) Reusability, Readability, modularity, testability (Coding
          Practices):
        </h3>
      </div>
      <div>
        <h3>14) Performance: Lazy loading:</h3>
        <p>Loading resources only when needed.</p>
        <p>
          <b>Asset optimization: </b>Minifying and compressing JS/CSS code.
        </p>
        <p>
          <b> Writing optimized code: </b>Following best practices for efficient
          code.
        </p>
        <p>
          <b> Bundler: </b>Tools like Webpack to bundle and optimize code.
        </p>
        <p>
          <b> CDN / Server level: </b> Distributing assets for faster loading.
        </p>
        <p>
          <b> Rendering of components: </b> Optimizing rendering for better
          performance.
        </p>
      </div>
      <div>
        <h3>15) Styling:</h3>
        <p>
          Tailwind, StyleX, Bootstrap, Material UI, Ant UI, CSS / SCSS:
          Different styling approaches and libraries.
        </p>
      </div>
    </div>
  );
};

export default ReactIQA;
