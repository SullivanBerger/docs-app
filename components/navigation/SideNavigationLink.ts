export default defineNuxtLink({
  componentName: "SideNavigationLink",
  externalRelAttribute: "noopener noreferrer",
  activeClass: "text-indigo-500",
  exactActiveClass: "text-indigo-500",
  prefetchedClass: undefined, // can be any valid string class name
  trailingSlash: undefined, // can be 'append' or 'remove'
});
