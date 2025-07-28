import RevealUp from "./revealUp"

function Home() {

    return(
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center z-10 px-4">
            <RevealUp>
              <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent leading-right outfit-title">
                Hey, {<br></br>} I'm Sahir Muhammad Tariq
              </h1>
            </RevealUp>
            <RevealUp>
              <p className="text-lg mb-8 max-w-lg mx-auto outfit-text">
                I’m a graduate from Mount Royal University with a degree in Computer Information Systems. <br></br>
                I love learning various technologies and using them to develop projects that drive my passion and 
                hope to extend it to help others.
              </p>
            </RevealUp>
        </div>
        </section>
    )
}

export default Home