import React from "react";

const InProgress = ({ 
  message = "We're working hard to bring you this feature. Please check back later!" 
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full p-4 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      
      {/* Main Card with Neumorphism */}
      <div className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-neumorphism border border-gray-100 animate-gentle-bounce">
        
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-4 left-4 w-16 h-16 bg-emerald-400 rounded-full"></div>
          <div className="absolute top-12 right-8 w-8 h-8 bg-teal-400 rounded-full"></div>
          <div className="absolute bottom-8 left-12 w-12 h-12 bg-cyan-400 rounded-full"></div>
        </div>

        {/* Loading Animation - Bouncing Dots */}
        <div className="flex justify-center items-center mb-8 h-20">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 shadow-lg"
                style={{
                  animation: `bounce-wave 1.4s ease-in-out infinite ${i * 0.1}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="text-center mb-8">
          <h3 className="text-gray-700 text-lg font-semibold leading-relaxed mb-2">
            {message}
          </h3>
          <p className="text-gray-500 text-sm">
            Thank you for your patience
          </p>
        </div>

        {/* Minimalist Progress */}
        <div className="space-y-3">
          <div className="flex justify-between text-xs text-gray-400">
            <span>Progress</span>
            <span className="animate-pulse">Loading...</span>
          </div>
          
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-progress-smooth shadow-sm"></div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="flex justify-center mt-6">
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .shadow-neumorphism {
          box-shadow: 
            20px 20px 60px #d1d5db,
            -20px -20px 60px #ffffff,
            inset 0px 1px 0px rgba(255, 255, 255, 0.8);
        }

        @keyframes gentle-bounce {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes bounce-wave {
          0%, 80%, 100% {
            transform: scale(0.8) translateY(0px);
            opacity: 0.7;
          }
          40% {
            transform: scale(1.2) translateY(-20px);
            opacity: 1;
          }
        }

        @keyframes progress-smooth {
          0% {
            width: 0%;
            opacity: 0.5;
          }
          50% {
            width: 70%;
            opacity: 1;
          }
          100% {
            width: 100%;
            opacity: 0.8;
          }
        }

        .animate-gentle-bounce {
          animation: gentle-bounce 4s ease-in-out infinite;
        }

        .animate-progress-smooth {
          animation: progress-smooth 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default InProgress;