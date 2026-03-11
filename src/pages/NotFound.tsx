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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative text-center px-6 max-w-2xl mx-auto">
        {/* 404 Badge */}
        <div className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-600 shadow-2xl">
          <span className="text-5xl font-bold">404</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Page Not Found
        </h1>

        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Error Details */}
        <div className="mb-8 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
          <p className="text-sm text-gray-400 font-mono">
            Attempted path: <span className="text-emerald-400">{location.pathname}</span>
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <a
            href="/#about"
            className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-200 group"
          >
            <p className="text-sm text-gray-400 mb-1">Learn about</p>
            <p className="text-lg font-semibold group-hover:text-emerald-400 transition-colors">About Me</p>
          </a>
          <a
            href="/#experience"
            className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-200 group"
          >
            <p className="text-sm text-gray-400 mb-1">Check out</p>
            <p className="text-lg font-semibold group-hover:text-emerald-400 transition-colors">Experience</p>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/">
            <Button className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              <FiHome className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-6 py-3 rounded-xl transition-all duration-200"
          >
            <FiArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>

        {/* Contact CTA */}
        <p className="text-gray-400 mt-8">
          Looking for something specific?{' '}
          <a href="/#contact" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4">
            Get in touch
          </a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
