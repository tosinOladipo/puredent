import { LuUpload } from "react-icons/lu";

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


    <div className="w-full flex-col gap-3 justify-center items-center text-center border border-gray-400 border-dashed py-6 rounded-2xl">
            <LuUpload className="w-5 h-5 mx-auto"/>
            <h3 className="text-lg font-bold">Drop a photo</h3>
            <span className="text-sm text-gray-500">JPG or PNG max 10mb 9:16 recommended</span>
    </div>


    </section>
  );
};

export default EntryForm;
