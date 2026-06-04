import Image from "next/image";
import EntryForm from "./mechanics/EntryForm";
import Container from '../global/Container'
import SectionHeadline from "../global/SectionHeadline";
import MechanicList from "./mechanics/MechanicList";
import { Camera, Hash, MessageSquareMore } from "lucide-react";

const Mechanics = () => {
  return (
    <main id="get-started" className="py-20 w-full bg-blue-50">
      <Container className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <aside className="col-span-1 md:col-span-7">
          <div className="flex flex-col gap-4 mb-10">
              <span className="text-sm font-bold">CAMPAIGN MECHANICS</span>
              <h2 className="text-5xl font-bold">
                Post it. Tag it. Own the <br />
                moment.
              </h2>
              <p className="text-gray-400 text-lg">
                Show three confidence check-ins through the day. Photo, video,
                or both — your story, your style.
              </p>
            </div>
            <section className="flex flex-col gap-6">
              <MechanicList icon={<Camera/>} headline="Photo enteries" desc="Crisp 9:16 selfies showing your fresh glow."/>
              <MechanicList icon={<MessageSquareMore/>} headline="Caption" desc="Mini-caption capturing your confident moment."/>
              <MechanicList icon={<Hash/>} headline="Hashtag required" desc="#SmileRevolutionNG · #12HourConfidence"/>
            </section>
        </aside>
        <aside className="col-span-1 md:col-span-5 shadow-lg p-6 rounded-4xl bg-white">
            <EntryForm />
        </aside>
      </Container>
    </main>
  );
};

export default Mechanics;
