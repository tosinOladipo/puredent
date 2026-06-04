import FormStage from "../entries/forms/FormStage";


const EntryForm = () => {


  return (
    <section className="flex flex-col gap-4">
      <div className="space-y-3">
        <span className="text-gray-400 text-sm">SUBMIT YOUR ENTRY</span>
        <h2 className="text-2xl font-bold">Drop your check-in</h2>
      </div>

      <nav className="grid grid-cols-3 gap-3">
            <div className="p-2 bg-blue-500 rounded-2xl text-center col-span-1 font-semibold">Morning</div>
            <div className="p-2 bg-blue-300 rounded-2xl text-center col-span-1 font-semibold">Midday</div>
            <div className="p-2 bg-blue-200 rounded-2xl text-center col-span-1 font-semibold">Evening</div>
      </nav>

    <FormStage/>

    </section>
  );
};

export default EntryForm;
