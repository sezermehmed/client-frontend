import ComboBox from "./ComboBox";

const ComponentCpu = () => {
    return (
        <div>
            <h2>
                Cpu
            </h2>
            <ComboBox dataEndpoint="http://localhost:8080/api/cpu" />
        </div>
    )
}
const ComponentMemory = () => {
    return (
        <div>
            <h2>
            Memory
            </h2>
            <ComboBox dataEndpoint="http://localhost:8080/api/memory" />
        </div>
    )
}
const ComponentMotherboard = () => {
    return (
        <div>
            <h2>
                Motherboard
            </h2>
            <ComboBox dataEndpoint="http://localhost:8080/api/motherboard" />
        </div>
    )
}
const Body = () => {
    return (
      <section>
        <h2>This is Body</h2>
        <ComponentCpu />
        <ComponentMemory />
        <ComponentMotherboard />
      </section>
    );
  };
  export default Body;