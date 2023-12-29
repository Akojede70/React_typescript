import Greet from "./components/greet";
import Person from "./components/person";
import PersonList from "./components/personList";
import Status from "./components/status";
import Heading from "./components/heading";
import Oscar from "./components/oscar";
import Button from "./components/button";
import Input from "./components/input";
import Container from "./components/container";
import Counter from "./components/counter";
// import { ThemeContextProvider } from "./components/context/ThemeContext"
import { ThemeContextProvider } from "./components/context/ThemeContext"; // Check the file path
import { Box } from "./components/context/box";
import RandomNumber from "./components/restriction/RandomNumber";

function App() {
  // Person
  const personName = {
    first: "Bruce",
    last: "wayne",
  };

  // personList
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="text-center font-bold">
      <Greet name="Peter Bass" messageCount={20} isLoggedIn={false} />
      <Greet name="Peter Bass" isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Status status="ahddhgfbdi" />
      {/*This will flag an error  */}
      <Heading>Placeholder text</Heading>
      {/* we can use heading like this and also */}
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("button clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <RandomNumber value={10} isPositive />
    </div>
  );
}

export default App;
