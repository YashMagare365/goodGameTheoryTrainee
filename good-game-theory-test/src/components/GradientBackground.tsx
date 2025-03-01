import React from "react";

interface GradientBackgroundProps {
  children: React.ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
}) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0E0237] via-[#080253] via-[#04074D] to-[#2F7994] flex flex-col items-center justify-center text-white font-coiny">
      {children}
    </div>
  );
};

export default GradientBackground;
