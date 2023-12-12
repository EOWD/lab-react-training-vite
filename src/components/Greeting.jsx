export function Greeting({ lang, children }) {
  let greeting;
  switch (lang) {
    case "de":
      greeting = "Hello";
      break;
    case "en":
      greeting = "Hello";
      break;
    default:
      greeting = "Hello";
  }
  return (
    <h1>
      {greeting}
      <br />
      {children}
    </h1>
  );
}




