import Footer from "./Footer";

export default function Layout({ children }: any) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
