
import { useEffect } from "react";
import { CustomButton } from "@/components/ui/custom-button";
import { StatCard } from "@/components/ui/stat-card";
import { FeatureCard } from "@/components/ui/feature-card";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";

const Index = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const openCalendly = () => {
    window.open("https://calendly.com/eushengho/catchup", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F0EAD6]">
      <section className="container mx-auto px-4 pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-up text-primary">
            Never Miss a Technical Question Again
          </h1>
          <p className="text-xl text-black mb-8 animate-fade-up">
            Transform your pre-sales conversations with an AI co-pilot that makes every team member your best performer.
          </p>
          <CustomButton
            size="lg"
            onClick={openCalendly}
            className="animate-fade-up"
          >
            Speak to a Founder Now <ArrowRight className="ml-2 h-5 w-5" />
          </CustomButton>
        </div>
      </section>

      <section className="bg-[#F0EAD6]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-10">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Battle-tested by Industry Leaders
            </h2>
            <p className="text-black max-w-2xl mx-auto mb-12">
              Built by former QuantumBlack / McKinsey technical consultants
            </p>
            <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0 translate-y-10">
              <div className="text-primary mb-6">
                <CheckCircle className="h-12 w-12 mx-auto" />
              </div>
              <blockquote className="text-2xl font-medium mb-6 text-black">
                "We've seen a 40% reduction in technical follow-ups and shorter sales cycles"
              </blockquote>
              <cite className="text-black not-italic">
                - Technical Sales Leader, Enterprise AI Company
              </cite>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F0EAD6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-on-scroll opacity-0 translate-y-10 text-primary">
            Turn Every Call into a Technical Win
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FeatureCard
              title="Real-time Confidence"
              description="Answer complex technical questions in real-time with confidence"
              className="animate-on-scroll opacity-0 translate-y-10"
            />
            <FeatureCard
              title="Team Knowledge"
              description="Capture and leverage winning responses across your entire team"
              className="animate-on-scroll opacity-0 translate-y-10"
            />
            <FeatureCard
              title="Stay Updated"
              description="Automatically identify knowledge gaps and update stale information"
              className="animate-on-scroll opacity-0 translate-y-10"
            />
            <FeatureCard
              title="Team Growth"
              description="Upskill your team with insights from top performers"
              className="animate-on-scroll opacity-0 translate-y-10"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-[#F0EAD6]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll opacity-0 translate-y-10">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Ready to Supercharge Your Technical Sales?
            </h2>
            <p className="text-xl text-black mb-8">
              Book a 30-minute call to see how CoAgent can transform your pre-sales process.
            </p>
            <CustomButton size="lg" onClick={openCalendly}>
              Schedule a Demo with the Founders <Calendar className="ml-2 h-5 w-5" />
            </CustomButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
