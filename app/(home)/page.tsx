import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          ROS!KO
        </h1>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/docs"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View Documentation
          </Link>
        </div>
      </div>
    </div>
  );
}
