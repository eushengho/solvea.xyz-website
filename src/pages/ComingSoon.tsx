
import { Link } from "react-router-dom";
import { CustomButton } from "@/components/ui/custom-button";
import { ArrowLeft } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-muted flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Coming Soon</h1>
      <p className="text-lg mb-8">We're working hard to bring you something amazing.</p>
      <Link to="/">
        <CustomButton>
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </CustomButton>
      </Link>
    </div>
  );
};

export default ComingSoon;
