import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FiHome, FiArrowLeft } from "react-icons/fi";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground relative overflow-hidden">
      <title>Page Not Found | Sanjeev Bhandari (@realsanjeev)</title>
      <meta name="robots" content="noindex, nofollow" />
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative text-center px-6 max-w-2xl mx-auto py-12">
        {/* 404 Badge */}
        <div className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-2xl bg-gradient-to-br from-emerald-600 to-cyan-600 shadow-xl shadow-emerald-500/20">
          <span className="text-4xl font-extrabold text-white tracking-tight">404</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
          Page Not Found
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        {/* Error Details */}
        <div className="mb-8 p-4 bg-card rounded-2xl border border-border shadow-xs">
          <p className="text-sm text-muted-foreground font-mono">
            Attempted path:{" "}
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              {location.pathname}
            </span>
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <a
            href="/#projects"
            className="p-4 bg-card hover:bg-emerald-500/10 rounded-2xl border border-border hover:border-emerald-500/40 transition-all duration-200 group shadow-xs"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Explore
            </p>
            <p className="text-base font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Featured Projects
            </p>
          </a>
          <a
            href="/#experience"
            className="p-4 bg-card hover:bg-emerald-500/10 rounded-2xl border border-border hover:border-emerald-500/40 transition-all duration-200 group shadow-xs"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Review
            </p>
            <p className="text-base font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Work Experience
            </p>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-3.5">
          <Link to="/">
            <Button size="lg">
              <FiHome className="mr-2 h-5 w-5" aria-hidden="true" />
              Back to Home
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
          >
            <FiArrowLeft className="mr-2 h-5 w-5" aria-hidden="true" />
            Go Back
          </Button>
        </div>

        {/* Contact CTA */}
        <p className="text-sm text-muted-foreground mt-8">
          Looking for something specific?{" "}
          <a
            href="/#contact"
            className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline underline-offset-4"
          >
            Get in touch
          </a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
