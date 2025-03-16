export default function LoadingSpinner() {
  return (
    <div className="w-full h-full h-min-screen flex flex-col justify-center items-center space-x-2">
      <div className="w-6 h-6 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      <p>Loading...</p>
    </div>
  );
}
