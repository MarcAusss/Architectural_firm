import Navbar from './components/navbar';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Welcome to the Landing Page</h1>
      </div>
    </main>
  );
}
