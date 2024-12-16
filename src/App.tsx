import './App.css'
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#eb2f00" />
        <meta name="description" content="Dive into YDev Esports – where passion meets performance. Unleash your gaming potential with insider tips, event coverage, and cutting-edge esports innovation designed for champions" />
      </Helmet>
      <div className="flex flex-col items-center justify-center h-screen gap-5 px-5">
        <div className='text-center'>
          <h1 className="gradient">Tournament</h1>
          <p style={{ marginTop: '-20px' }}>The recruitment for our Esports team is not open right now. Stay tuned for updates!</p>
        </div>
        <div style={{ maxWidth: '600px' }}>
          <article className="relative hover:cursor-no-drop overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-full max-h-screen sm:max-w-md sm:max-h-[300px]">
            <img
              alt=""
              src="https://www.beartai.com/wp-content/uploads/2021/10/Pokemon-UNITE.jpg"
              className="absolute inset-0 h-full w-full object-cover grayscale"
            />
            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32">
              <div className="p-4 sm:p-6">
                <a>
                  <h3 className="mt-0.5 text-lg text-white">Join Our Pokémon Unite Esports Team!</h3>
                </a>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  Are you ready to compete at the highest level? We're looking for skilled players to join
                  our team and dominate the battlefield in Pokémon Unite. Apply now and be part of something epic!
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 pb-3 pl-3 z-50">
        YDev Esports Team (2024) © All rights reserved
      </footer>
    </>
  )
}

export default App
