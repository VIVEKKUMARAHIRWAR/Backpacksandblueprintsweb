import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="py-32 md:py-40">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="text-6xl md:text-8xl font-bold text-muted-foreground/30">
              404
            </div>
            <h1 className="text-3xl md:text-5xl">
              Page Not Found
            </h1>
            <p className="text-lg text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
