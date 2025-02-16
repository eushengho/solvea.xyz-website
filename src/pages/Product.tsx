
import { useEffect } from "react";
import { CustomButton } from "@/components/ui/custom-button";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const Product = () => {
  const openCalendly = () => {
    window.open("https://calendly.com/eushengho/catchup", "_blank");
  };

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

  return (
    <div className="min-h-screen bg-[#F0EAD6]">
      {/* Section 1: Value Proposition */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Solvea learns alongside your team
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 animate-on-scroll opacity-0 translate-y-10">
            <h3 className="text-xl font-semibold mb-4">Instant value</h3>
            <p className="text-gray-700">
              Inspire customer trust and shorten deal cycles with confident technical answers
            </p>
          </Card>
          <Card className="p-6 animate-on-scroll opacity-0 translate-y-10">
            <h3 className="text-xl font-semibold mb-4">Real-time learning</h3>
            <p className="text-gray-700">
              Solvea learns in real-time from the gold standard, capturing tribal knowledge
            </p>
          </Card>
          <Card className="p-6 animate-on-scroll opacity-0 translate-y-10">
            <h3 className="text-xl font-semibold mb-4">Pre-Sales teams</h3>
            <p className="text-gray-700">
              Identifies knowledge gaps/stale data, upskills
            </p>
          </Card>
        </div>
      </section>

      {/* Section 2: Perfect Teammate */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Solvea is the perfect teammate in every sales situation
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            { title: "Fast", desc: "Solvea generates answers instantly for high confidence questions" },
            { title: "Thoughtful", desc: "Solvea prompts follow-ups to understand the customer's root causes" },
            { title: "Careful", desc: "Solvea is critical of its own understanding so you know when to trust it" },
            { title: "Factual", desc: "Solvea grounds all answers with hyperlinked, real sources" },
            { title: "Strategic", desc: "Solvea reminds you of the product narrative" }
          ].map((item, index) => (
            <Card 
              key={item.title}
              className={`p-6 transform transition-all duration-300 animate-on-scroll opacity-0 translate-y-10 hover:-translate-y-1 hover:shadow-lg ${
                index > 0 ? '-mt-2' : ''
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 3: Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Solvea is the perfect teammate in every sales situation
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              title: "Live Call support",
              desc: "Solvea listens into your call and gives recommendations agentically"
            },
            {
              title: "Agentic Follow-ups",
              desc: "Solvea follows up on research, reaching out to teammates, and drafting customer responses for you"
            },
            {
              title: "Analytics",
              desc: "Solvea tracks customer behaviour and reps performance, giving you visibility on what works and what doesn't"
            }
          ].map((item, index) => (
            <Card 
              key={item.title}
              className={`p-6 animate-on-scroll opacity-0 translate-y-10 ${
                index % 2 === 1 ? 'ml-auto' : 'mr-auto'
              }`}
              style={{ width: "80%" }}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 4: Integrations */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">
          Solvea works with your favorite tools
        </h2>
        <div className="max-w-6xl mx-auto mt-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Data Sources */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Data Sources</h3>
              {["Documentation", "Enablement Library", "Knowledge Base", "Internal Communications", "CRM", "Support Tickets"].map((source) => (
                <div key={source} className="p-3 bg-white rounded-lg shadow-sm border">
                  {source}
                </div>
              ))}
            </div>

            {/* Solvea */}
            <div className="flex items-center justify-center">
              <div className="p-6 bg-primary text-white rounded-lg font-semibold text-xl">
                Solvea
              </div>
            </div>

            {/* Users */}
            <div className="space-y-4">
              {["SDRs", "Account Executives", "Pre-Sales Engineers"].map((user) => (
                <div key={user} className="p-3 bg-white rounded-lg shadow-sm border">
                  {user}
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <div className="absolute left-1/3 top-1/2 w-1/3 h-0.5 bg-primary transform -translate-y-1/2"></div>
          </div>
        </div>
      </section>

      {/* Section 5: Product Demo */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          See Solvea in Action
        </h2>
        <div className="max-w-4xl mx-auto aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/ZK-rNEhJIDs"
            title="Product Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Section 6: Call to Action */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary">Ready to try it out?</h2>
        <CustomButton size="lg" onClick={openCalendly}>
          Speak to a Founder Now <ArrowRight className="ml-2 h-5 w-5" />
        </CustomButton>
      </section>
    </div>
  );
};

export default Product;
