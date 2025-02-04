'use client';

const LoadingState = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900/80 to-purple-900/80">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-2xl font-semibold text-white">Loading amazing content...</h2>
      </div>
    </div>
  );
};

export default LoadingState; 