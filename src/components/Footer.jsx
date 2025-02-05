export default function Footer() {
  return (
    <footer className="bg-gray-200 p-4 text-center fixed bottom-0 left-0 w-full">
      <p className="text-gray-600">
        &copy; {new Date().getFullYear()} Allercheck. All rights reserved.
      </p>
    </footer>
  );
}
