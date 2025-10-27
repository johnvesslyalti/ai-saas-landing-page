export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Layered radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_70%),radial-gradient(circle_at_bottom_right,rgba(180,180,255,0.15),transparent_70%)] blur-3xl" />

      {/* Your content here */}
      <div className="relative z-10 flex items-center justify-center h-screen text-white">
        <h1 className="text-4xl font-bold">AI SaaS Landing Page</h1>
      </div>
    </div>
  );
}
