import ExampleEvent from "@/components/events/example_event";

const EventPage = () => {
  return (
    <main className="flex-wrap justify-center items-center flex flex-col">
      <div>
        <h1>Event Page</h1>
        <ExampleEvent />
      </div>
    </main>
  );
};

export default EventPage;
