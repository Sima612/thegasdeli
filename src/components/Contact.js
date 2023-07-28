import Header from "./Header";
import Nav from "./Nav";

function Contact() {
  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>

      <main className="container mx-auto">
        <h2 className="text-2xl text-left mt-10 mb-10 font-bold text-slate-700 border-b-8 border-green-600 w-1/6">
          CONTACT
        </h2>
        <form className="container">
          <label>Name *</label>
          <input type="text" />
          <label>Email *</label>
          <input type="email" />
          <label>Phone Number </label>
          <input type="number" />
          <label>Comment or Message * </label>
          <input type="textarea" />
        </form>
      </main>
    </>
  );
}

export default Contact;
