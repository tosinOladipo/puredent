import React from "react";
import Container from "../global/Container";
import SectionHeadlineAi from "../global/SectionHeadlineAi";
import PointCard from "./ai-points/PointCard";
import { Award, Bubbles, MessageSquarePlus, SmilePlus } from "lucide-react";

const AiPoints = () => {
  return (
    <section className="py-16 bg-[url('/img/bg/ai-bg2.jpg')] bg-cover bg-center bg-no-repeat pb-30">
      <Container>
        <SectionHeadlineAi
          topic="AI CONFIDENCE ZONE"
          title="Your glow, powered by AI"
          desc="Drop a check-in and watch our AI score your freshness, energy and signature smile in seconds."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-10 px-4 md:px-0">
          <PointCard icon={<Bubbles/>} point={70} topic="Freshness Score" desc="AI rates your glow from 0–100 instantly."/>
          <PointCard icon={<SmilePlus/>} point={85} topic="Confidence Score" desc="Pose, smile, energy — analyzed in real time."/>
          <PointCard icon={<MessageSquarePlus/>} point={95} topic="Day Recap Video" desc="auto-edited 15s recap of your day."/>
          <PointCard icon={<Award/>} point={55} topic="Feedback Badges" desc="Unlock fun badges as you post more."/>
        </div>
      </Container>
    </section>
  );
};

export default AiPoints;
