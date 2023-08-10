# NextJS 13 E-Commerce Application using Pages Architecture

This project aims to build for learning purpose an e-commerce application using NextJS 13 Pages Architecture.

## Technologies

1. NextJS 13.4.x as base framework
2. Clerk for auth
3. TailwindCSS for styling
4. Turso as Edge DB
5. Partytown for 3rd party offloading of scripts
6. GTM for tracking and testing with Partytown
7. Framer motion for animation
8. Vercel for deployment

## Learnings

1. Pages Router has 3 problems:

  - The SSR/SSG approaches send all the JavaScript used to generate the page to the client, where the client then runs it all again and hydrates that HTML with the JavaScript that just booted up. The question here was, do we really need to duplicate all of the rendering work just to hydrate?

  - What if that server-side render takes a long time? Maybe it runs a lot of code, maybe it's stuck waiting for a slow database call? Then the user's stuck waiting.

  - We have to load everything (entire APP) before we hydrate anything.

2. React Server Components aims to solve the above 3 problems.

3. React Server Components: RSCs are react components that run on the server instead of on the client. The real question is, why do we want RSCs? Because it has 2 main advantages over SSR:
  - Frameworks that support RSCs give us a way to define where our code runs: what needs to run only on the server (like PHP) and what should run on the client (like SSR). These are called Server components and Client components respectively. Since we can be explicit about where our code runs, we can send less JavaScript to the client, leading to smaller bundle sizes and less work during hydration.
  - Second advantage of RSC-driven frameworks is that Server Components can fetch data directly from within the component. When that fetch is complete, Server Components can stream that data to the client. This means no more **useEffect()** hook for most part and manage complex loading states (react-query, rtk query, etc), and no more fetching a bunch of data at the page level with **getServerSideProps** and then doing prop drilling.
  - Third, it solves the problem of slow database call, as the server component directly fetches its own data and streams it when it's ready.
  - Fourth, if we need to fetch data on the server in response to a user's action on the client (like form submission), we can do that too. The client can send the data to the server, and the server can do its fetching or whatever, and stream the response back to the client just like it streamed that initial data. This 2-way communication is possible through **React Actions** which is a little different from Server Component.

4. CSS-in-JS doesn't work in Server Components. This means styled-components type solution won't work. TailwindCSS works here without any issue and normal CSS as well.

5. React Context doesn't work in Server Components. It can only be accessed through Client Components. To share data between Server Components without using props, we'll probably have to use modules.

6. By default, all components are Server Components -> No code sent to the client browser. We can use async await in Server Component by making the Server component async function

    ```jsx
    import { Suspense } from 'react';

    async function getData(id) {
      const response = await fetch(`url/${id}`);
      return response.json();
    }

    async function ServerComponent({id}) {
      const data = await getData(id);
      return (
        <Suspense fallback={<p>Loading data...</p>}>
          <p>Data: {data}</p>
        </Suspense>
      )
    }
    ```
7. Suspense, apart from streaming data, can also help in prioritizing hydration of certain specific part of an app in response to user interaction.

8. Component will be shipped on the client if we mention **"use client"** at the top of the component. This will also make sure that all the components this client component imports gets shipped to the client.

    ```jsx
    "use client"

    import ServerComponent from "./server-component" // do not do this

    function ClientComponent() {
      const [count, setCount] = useState(0)

      return (
        <>
          <button onClick={() => setCount(count + 1)}>
            The count is: {count}
          </button>
          <ServerComponent /> {/* still runs on the client */}
        </>
      )
    }
    ```

9. If the library doesn't support RSC, we can import it inside the client component making it a part of a client component.

10. If we wrap our key Server Components in Suspense to enable streaming of slow data fetches, the rest of the App components which are not slow won't have to wait for the slow component to resolve the data fetch.

11. One advance pattern that emerges here due to nature of imports and client component is that we should not import server components in the client components as they will become client components or throw error. We should pass them as children or props instead. This way, the server component will be rendered on the server, serialized, and sent to our client component.

    ```jsx
    "use client"

    function ClientComponent({serverComponentAsPropsOrChildren}) {
      const [count, setCount] = useState(0)

      return (
        <>
          <button onClick={() => setCount(count + 1)}>
            The count is: {count}
          </button>
          {serverComponentAsPropsOrChildren} {/* This renders as RSC if it's a RSC */}
        </>
      )
    }
    ```

12. It will result in more server cost but better performance in theory as less JavaScript is shipped to the client.

13. Caching is a little bit tricky here as React by default seems to cache the fetch data request. And since the fetching component runs on the server, if you route on the client end back and forth even after changing the data, it doesn't change the data being shown because it isn't rendering the page again and never making the fetch request again either. Adding **no-store** cache option also doesn't work. Making the server component as "client component" fixes the issue here but it is basically infinite fetching.

14. If we work with pages that don't need to load data or loading data all at once before showing anything, there won't be much benefits in the short run (kind of like over-engineered blogs). It also has architecture server cost and code complexity but better performance. It's primarily good for apps that are quite complex where data is being fetched from different sources or which aims to become quite complex moving forward in time.

## React Server Components (RSCs) Pros:

**1. Smaller Bundle Sizes and Faster Execution:** RSCs allow sending less JavaScript to the client, leading to smaller bundle sizes and faster execution, which is beneficial for SEO and page load times.
**2. Advanced Data Loading Patterns:** RSCs provide advanced data loading patterns that can optimize complex data-heavy components, improving overall application performance.
**3. Up-to-date React Architecture:** RSCs are aligned with present and future React architecture, ensuring better maintainability and scalability in the long run.
**4. Better Package Support:** As React and its ecosystem evolve, RSCs are likely to receive better package support, contributing to improved maintainability.
**5. Access to New React Features:** RSC-driven frameworks are likely to incorporate new React features, enabling you to leverage them in the future.
**6. Improved Page Load Times:** Faster rendering with streaming and parallel, non-blocking data loading can lead to better Google Web Metrics and higher conversion rates.
**7. Granular Caching Control:** RSCs offer more control and granularity for caching, allowing you to optimize caching strategies.
**8. Hydrate Only What's Needed:** RSCs enable you to hydrate only the necessary components on the client, improving overall performance.

## React Server Components (RSCs) Cons:

**1. Increased Server Cost:** RSCs may increase server workload and costs due to more processing being performed on the server.
**2. New Mental Model:** Developers need to understand the new concept of server-only rendering and manage the differences in rendering environments.
**3. Initial Code Complexity:** Adapting to RSCs might lead to an increase in code complexity during the initial learning curve.
**4. Server-only Rendering Environment:** RSCs introduce a new server-only rendering environment, which might require adjustments to existing workflows.
**5. Control Over Hydration:** Developers need to ensure proper control over what gets hydrated and what doesn't, which could require additional attention.


## Sources
1. [Everything I wish I knew before moving 50,000 lines of code to React Server Components - Darius Cepulis](https://www.mux.com/blog/what-are-react-server-components)
2. [Splitting the Work: Streaming Server Rendering with Suspense: Shaundai Person](https://www.youtube.com/watch?v=Q98l5o1y3ao)
3. [The Costs & Benefits of React Server Components: Jeff Escalante](https://www.youtube.com/watch?v=TJOiXyVKExg)

## Deployments

1. Live deployment Pages Router Application: https://pagestore.saurabhsrivastava.in/
2. Live deployment App Router Application: https://appstore.saurabhsrivastava.in/
3. GitHub code: https://github.com/saurabhsri108/next-store

## License

MIT
