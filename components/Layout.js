import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="bg-secondary" style={{ minHeight: "100vh" }}>
      <Nav />
      {children}
    </div>
  );
}
