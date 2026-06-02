import React from "react";
import Container from "../global/Container";
import SectionHeadline from "../global/SectionHeadline";
import { Hash, PaintbrushVertical, Sparkles, Upload } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className=" py-26 shadow-lg">
      <Container>
        <SectionHeadline 
        topic="HOW IT WORKS" 
        title="Four steps to your fresh era" 
        desc="The challenge runs for 7 days. Drop a daily entry, climb the
        leaderboard, win prizes."
        />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 px-4 md:px-0">
        <div className="col-span-1 flex flex-col text-center items-center justify-center rounded-xl p-6 border border-violet-200 gap-6 max-w-sm">
          <div className="p-6 aspect-square bg-violet-100 rounded-full">
            <Sparkles/>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-slate-700">
              Register or sign in
            </h3>
            <p className="text-sm text-slate-600">
              Sign up in seconds with email, phone, or socials to claim your
              spot.
            </p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col text-center items-center justify-center rounded-xl p-6 border border-green-200 gap-6 max-w-sm">
          <div className="p-6 aspect-square bg-green-100 rounded-full">
            <PaintbrushVertical/>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-slate-700">
              Brush with Puredent
            </h3>
            <p className="text-sm text-slate-600">
              Start your day fresh. Set your 12-hour confidence timer.
            </p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col text-center items-center justify-center rounded-xl p-6 border border-orange-200 gap-6 max-w-sm">
          <div className="p-6 aspect-square bg-orange-100 rounded-full">
            <Upload/>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-slate-700">
              Upload 3 check-ins
            </h3>
            <p className="text-sm text-slate-600">
              Capture morning, midday and evening moments that show your glow.
            </p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col text-center items-center justify-center rounded-xl p-6 border border-violet-200 gap-6 max-w-sm">
          <div className="p-6 aspect-square bg-violet-100 rounded-full">
           <Hash/>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-slate-700">
              Share to win
            </h3>
            <p className="text-sm text-slate-600">
              Post with our hashtags and tag friends to climb the leaderboard.
            </p>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
