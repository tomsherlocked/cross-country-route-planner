# Cross Country route planning app

A basic React App that enables users to plan cross country routes and download as GPX file.

### Tools used

- `create-react-app` was used to bootstrap the basic React application
- `pigeon-maps` was used to provide a basic map component
  > Note: this was used a lightweight map library, not to provide full functionality. Waypoints, route drawing/ordering & GPX creation were developed
- `tailwind CSS` was used as a utility library for CSS

### Running locally

- clone/unzip repo
- Install packages with `npm i`
- Start with `npm run start`.
- Open a browser (tested in chrome), point at `localhost:3000`

### Notes

- Tailwind CSS was used as a utility library, allowing for more simple CSS prototyping, as well as defined variables for colours.
- CSS was not scoped or managed using any third party libraries, due to the small size of the project. In a larger project I would use styled-components or a CSS preprocessor to manage styles. Instead, a standard BEM-style naming convention was used in a single CSS file (`index.css`)
- The site is currently deployed with GitHub pages - available publically at [tomsherlock.info/cross-country-route-planner](https://tomsherlock.info/cross-country-route-planner/). The [corresponding git repository](https://github.com/tomsherlocked/cross-country-route-planner) also holds this code.

### Lessons learned

I initially created the application using the Mapbox JavaScript library without any react component wrappers, based on their [documentation guide](https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/). However, I found this to be heavyweight and cumbersome for what was a simple application, with limited functionality. I got bogged down in trying to integrate the more traditional DOM-manipulating `mapbox-gl-js` with the more modern React method of handling such code. I instead built the rest of the application then came back to the map, using the very lightweight `pigeon-maps` library to provide the basic functionality, then adding my own components to build lines and marker on top of it. This proved to be significantly more simple to implement, and I wished I'd chosen this option first!

I also chose to manage state in a simple way, due to basic nature of the application only requiring a single piece of state to be stored. Setting up a simple context provider to globally share the state of the waypoints allowed me to limit passing props down to child components, which kept the lower child components more simple.

Finally, this gave me an opportunity to use the native browser drag-and-drop API more - something I have only used in limited ways before.
