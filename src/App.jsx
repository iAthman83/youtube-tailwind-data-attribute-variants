import DecisionComponent from "./components/DecisionComponent";

function App() {
  return (
    <div className="flex justify-center items-center flex-col mt-14">
      <DecisionComponent status="stop" decision="Stop" />
      <DecisionComponent status="ready" decision="Ready" />
      <DecisionComponent status="go" decision="Go" />
    </div>
  );
}

export default App;
