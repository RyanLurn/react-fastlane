import { ModeToggle } from "@/components/utils/mode-toggle";

function App() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <ModeToggle className="fixed top-3 right-3" />
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        React Fastlane
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        A React Vite SPA template for quick prototyping.
      </p>
    </div>
  );
}

export default App;
