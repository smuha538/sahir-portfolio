import { AnimatePresence } from "motion/react";
import Modal from "./modal"
import PortfolioCard from "./portfolioCard"
import { useState } from "react";
import RevealRight from "./revealRight";
import RevealLeft from "./revealLeft";
import RevealDown from "./revealDown";
import RevealUp from "./revealUp";

function Portfolio() {

    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [stack, setStack] = useState("");
    const [modalTitle, setTitle] = useState("");
    const [github, setGithub] = useState("");
    const japaneseDescription = "This web application is a dictionary and flashcard system in one. Users can look up words, create decks and review flashcards based on the Spaced-Repetition System."
    const japaneseStack = ["JavaScript", "PHP", "MaterializeCSS", "MongoDB"]
    const footballDescription = "A football app which allows users to view match fixtures for various games and teams across several leagues. Furthermore, users can search up players and view their stats across various competitions."
    const footballStack = ["Flutter", "Dart", "Google API"]
    const colourDescription = "This mobile application allows the user to change the colour of an image or photo based on the colour of pixel."
    const colourStack = ["Java", "Firebase", "Android Studio"]
    const meteorDescription = "This game allows the player to control a space ship with fire power and the mission to survive a vast array of diverse meteorites."
    const meteorStack = ["C#", "Unity"]
    const movieDescription = "This movie application allows users to search for, filter, and favourite movies."
    const movieStack = ["JavaScript", "PHP", "MySQL"]
    const ffDescription = "*In-Development* This web application is a game which allows players to relive through the Final Fantasy series by listening to the music and forming teams to fight against some of the iconic monsters."
    const ffStack = ["C#", "React", "Supabase", "TailwindCSS"]

    return(
        <section id="projects" className="md:flex items-center justify-center">
            <RevealLeft>
                <div className="p-4">
                <h1 className="text-3xl outfit-title text-blue-200 mb-8 text-center ">My Projects</h1>
                <p className="text-lg mb-8 max-w-lg mx-auto outfit-text text-center outfit-text text-white">
                    These are some of my personal passion projects and academic projects that I spend a lot time and effort on developing.
                </p>
                </div>
            </RevealLeft>
            <AnimatePresence>
                {isOpen && <Modal title={modalTitle} modalDescription={description} modalStack={stack} modalLink={github} onClose={() => setIsOpen(false)} />}
            </AnimatePresence>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10 p-10 rounded-md">
                <RevealLeft>
                <PortfolioCard image={"torii.jpg"} title={"Japanese Flashcard Web Application"} description={japaneseDescription} stack={japaneseStack}
                    githubLink={"https://github.com/smuha538/Learn-Japanese-Website"} githubHandler={setGithub} descriptionHandler={setDescription} stackHandler={setStack} titleHandler={setTitle} handler={setIsOpen}/>
                </RevealLeft>
                <RevealDown>
                <PortfolioCard image={"football.jpg"} title={"Flutter Football App"} description={footballDescription} stack={footballStack} 
                    githubLink={"https://github.com/smuha538/flutter_football"} githubHandler={setGithub} descriptionHandler={setDescription} stackHandler={setStack} titleHandler={setTitle} handler={setIsOpen}/>
                </RevealDown>
                <RevealRight>
                <PortfolioCard image={"colour.jpg"} title={"C-Visualizer"} description={colourDescription} stack={colourStack} 
                    githubLink={"https://github.com/smuha538/C-Visualizer"} githubHandler={setGithub} descriptionHandler={setDescription} stackHandler={setStack} titleHandler={setTitle} handler={setIsOpen}/>
                </RevealRight>
                <RevealLeft>
                <PortfolioCard image={"meteor.jpg"} title={"Meteoric Quest"} description={meteorDescription} stack={meteorStack} 
                    githubLink={"https://github.com/smuha538/Meteoric-Quest"} githubHandler={setGithub} descriptionHandler={setDescription} stackHandler={setStack} titleHandler={setTitle} handler={setIsOpen}/>
                </RevealLeft>
                <RevealUp>
                <PortfolioCard image={"popcorn.jpg"} title={"Movie Web Application"} description={movieDescription} stack={movieStack} 
                    githubLink={"https://github.com/smuha538/Advanced-Movie-Web-Application"} githubHandler={setGithub} descriptionHandler={setDescription} stackHandler={setStack} titleHandler={setTitle} handler={setIsOpen}/>
                </RevealUp>
                <RevealRight>
                <PortfolioCard image={"ff.png"} title={"Final Fantasy Project"} description={ffDescription} stack={ffStack} 
                    githubLink={"https://github.com/smuha538/FFProject"} githubHandler={setGithub} descriptionHandler={setDescription} stackHandler={setStack} titleHandler={setTitle} handler={setIsOpen}/>
                </RevealRight>
            </div>
        </section>
    )
}

export default Portfolio