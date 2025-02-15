
import { Link } from "react-router-dom";
import { CustomButton } from "./custom-button";

export function Navbar() {
  return (
    <nav className="bg-white shadow-subtle">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Solvea</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/product">
              <CustomButton variant="secondary">Product</CustomButton>
            </Link>
            <Link to="/articles">
              <CustomButton variant="secondary">Articles</CustomButton>
            </Link>
            <Link to="/book-demo">
              <CustomButton>Book a Demo</CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
