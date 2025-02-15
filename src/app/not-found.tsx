import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-4xl font-bold text-primary">404 - Page Not Found</h1>
        <p className="text-muted-foreground max-w-md">
          Sorry, we couldn't find the page you're looking for. Please check the URL or return to the homepage.
        </p>
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 