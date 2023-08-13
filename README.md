# Next-js-fullcourse

https://www.youtube.com/watch?v=KjY94sAKLlw

https://www.youtube.com/watch?v=VE8BkImUciY



Nextjs:
-------

Next.js is a backend framework which is based on React.

Everything we can do in React we can also do in Next.js – with some additional features like routing, API calls, authentication, and more. We don’t have these features in React. Instead, we have to install some external libraries and dependencies – like React Router for routing in a single page React app, for example.

But in Next.js, things are different. We don’t have to rely on external libraries to get these kinds of things done. They come built into the package when we create a Next.js app.

This is the main reason why a Next.js app is different from a traditional React app.

Next js Re-rendering SSR and CSR:
---------------------------------

How does CSR Work?

When you visite your website the server receives the request and sends an empty HTML file and a bunch of bundled Javascript , and your browser processes those bundles and renders the final HTMl file  so the initial page lead speed of the application can be slow because of this process, and since the page is built on the user is browser, search engines cannot index
website properly but on the server side rendering, when you visite the website the server receives the request and renders the HTML page and sends 
that to your browser, so if we a have an old computer or phone it is really good because your browser doesnt have to render everything from scratch, so it shows the initial page faster but since everything happens on server side you wont be able to intract with the user, if you want to create an event you have to create a client side component, so if you have a highly
intractive website it might be really annoying basically chossing SSR and CSR depends on your project.


That is why next-js is greate because you can combine server side and client side components and build a complete application 

NextJs images
--------------

To add an image we are not going to be useing image HTML <img /> , it will display a warning  we will use <Image />


NextJs Fetching 
---------------


Fetching Data Where It's Needed
If you need to use the same data (e.g. current user) in multiple components in a tree, you do not have to fetch data globally, nor forward props between components. Instead, you can use fetch or React cache in the component that needs the data without worrying about the performance implications of making multiple requests for the same data.