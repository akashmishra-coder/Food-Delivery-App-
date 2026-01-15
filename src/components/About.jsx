import { useState, useEffect } from "react";
import UserClass from "./UserClass";
import Shimmer from "./Shimmer";
import { ArrowUp } from "lucide-react";

function About() {
  const [userInfo, setUserInfo] = useState([]);
  const [error, setError] = useState(null);
const [isVisible, setisVisible] = useState(false);
    function handleScroll() {
        window.addEventListener("scroll", () => {
            console.log(window.scrollY);
            
            if(window.scrollY > 200){
                setisVisible(true)
            }else{
                setisVisible(false)
            }
        })
    }
     function scrollToTop() {
    // Implement smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior:"smooth",
    })
  }
   
  useEffect(() => {
    fetchData();
    handleScroll();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch("https://api.github.com/users");
      if (!res.ok) throw new Error("Network response was not ok");
      const json = await res.json();
      setUserInfo(json);
    } catch (err) {
      console.error(err);
      setError("Failed to load team members. Try again later.");
    }
  }

  return (
    <main className="max-w-6xl mx-auto p-6 sm:p-10">
      {isVisible && <button  onClick={scrollToTop} className=" fixed z-40 bg-blue-700 px-2 py-2 cursor-pointer active:scale-95 transition  bottom-10 right-10 rounded-md"><ArrowUp /></button>}
      <header className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">About us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">We build delightful food experiences — focusing on fast delivery, fresh ingredients, and a memorable customer journey.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="/contact" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700">Contact us</a>
          <a href="#team" className="inline-block text-indigo-600 px-4 py-2 rounded-md border border-indigo-100 hover:bg-indigo-50">Meet the team</a>
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <article className="p-6 bg-white rounded-lg shadow text-center transform transition duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-gray-50 motion-reduce:transform-none">
          <div className="text-3xl mb-2">🚀</div>
          <h3 className="font-semibold mb-1">Our mission</h3>
          <p className="text-sm text-gray-600">Deliver great food fast and make every meal special.</p>
        </article>

        <article className="p-6 bg-white rounded-lg shadow text-center transform transition duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-gray-50 motion-reduce:transform-none">
          <div className="text-3xl mb-2">💡</div>
          <h3 className="font-semibold mb-1">Our values</h3>
          <p className="text-sm text-gray-600">Quality, transparency, and customer-first thinking guide every decision.</p>
        </article>

        <article className="p-6 bg-white rounded-lg shadow text-center transform transition duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-gray-50  motion-reduce:transform-none">
          <div className="text-3xl mb-2">⚙️</div>
          <h3 className="font-semibold mb-1">Our approach</h3>
          <p className="text-sm text-gray-600">Iterate quickly, listen to feedback, and ship reliably.</p>
        </article>
      </section>

      <section id="team">
        <h2 className="text-2xl font-bold mb-4">Meet the team</h2>

        {error && <div className="text-red-600 mb-4">{error}</div>}

        {userInfo.length === 0 && !error ? (
          <Shimmer />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {userInfo.map((user) => (
              <UserClass key={user.id} data={user} />
            ))}
          </div>
        )}
      </section>

      <section className="mt-10 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Your Company — Built with ❤️</p>
      </section>
    </main>
  );
}

export default About;
