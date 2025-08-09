import RevealDown from "./revealDown";
import RevealLeft from "./revealLeft";
import RevealRight from "./revealRight";
import RevealUp from "./revealUp";

function About() {

    const frameworks = ["React", "MaterializeCSS", "TailwindCSS"];
    const databases = ["Google Cloud", "MySQL", "Postgress", "Firebase", "MongoDB", "Snowflake"];
    const languages = ["Java", "JavaScript", "PHP", "Dart", "Python", "C#", "TypeScript", "Bash"];
    const more = ["Android Studio", "Flutter", "Unity", "Blender", "Power Automate"];
    return(
        <section id="about" className="min-h-screen flex items-center justify-center">
            <div className="max-w-3xl mx-auto px-4">
            <RevealDown>
            <h2 className="text-3xl mb-8 text-center outfit-title text-white">
                My Background
            </h2>
            </RevealDown>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-white">
                <RevealLeft>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-[url(/images/bg.svg)] outfit-text">
                        <h3 className="text-xl mb-4 text-center outfit-title"> Education </h3>
                        <strong> Bachelor Degree in Computer Information Systems </strong> -{<br></br>} Mount Royal University
                        <br />
                        
                        <ul>
                            <li className="mt-2">
                                <strong> Secondary Schools </strong> - 
                            </li>
                            <li className="mt-2">
                                Normal West Community High
                            </li>
                            <li className="mt-2">
                                The Westminster School
                            </li>
                            <li className="mt-2">
                                The Winchester School
                            </li>
                        </ul>
                    </div>
                </RevealLeft>
                <RevealRight>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-[url(/images/bg.svg)]">
                        <h3 className="text-xl mb-4 text-center outfit-title"> Work Experience </h3>
                        <div className="space-y-4 text-gray-300 outfit-text">
                            <div>
                            <h4 className="font-semibold">
                                Software Developer COOP at Absorb Software (2024 May - 2024 Dec)
                            </h4>
                            </div>

                            <div>
                            <h4 className="font-semibold">
                                Application Analyst Intern at Carbon Alpha (2022 Nov - 2023 Apr)
                            </h4>
                            </div>
                            <div>
                            <h4 className="font-semibold">
                                Technical Dress Rehearsal Tester and Support Analyst at Alberta Health Services (2022 Sep - 2022 Dec)
                            </h4>
                            </div>
                        </div>
                    </div>
                </RevealRight>
                    <div className="md:col-span-2 rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mb-5 bg-[url(/images/bg.svg)]">
                    <RevealUp>
                        <h3 className="text-xl mb-4 text-center outfit-title"> Stack Across All My Projects</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 outfit-text">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl mb-4 text-center outfit-title"> Languages</h3>
                                <div className="flex flex-wrap gap-3 justify-center">
                                {languages.map((language, key) => (
                                    <span
                                    key={key}
                                    className="bg-yellow-300 text-black py-1 px-3 rounded-full text-sm hover:bg-yellow-500 
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                    {language}
                                    </span>
                                ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl mb-4 text-center outfit-title"> Databases</h3>
                                <div className="flex flex-wrap gap-3 justify-center">
                                {databases.map((database, key) => (
                                    <span
                                    key={key}
                                    className="bg-yellow-300 text-black py-1 px-3 rounded-full text-sm hover:bg-yellow-500 
                                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                    >
                                    {database}
                                    </span>
                                ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl mb-4 text-center outfit-title"> Frameworks</h3>
                                <div className="flex flex-wrap gap-3 justify-center">
                                {frameworks.map((framework, key) => (
                                    <span
                                    key={key}
                                    className="bg-yellow-300 text-black py-1 px-3 rounded-full text-sm hover:bg-yellow-500 
                                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                    >
                                    {framework}
                                    </span>
                                ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl mb-4 text-center outfit-title"> More</h3>
                                <div className="flex flex-wrap gap-3 justify-center">
                                {more.map((more, key) => (
                                    <span
                                    key={key}
                                    className="bg-yellow-300 text-black py-1 px-3 rounded-full text-sm hover:bg-yellow-500 
                                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                    >
                                    {more}
                                    </span>
                                ))}
                                </div>
                            </div>
                        </div>
                        </RevealUp>
                    </div>    
                </div>
            </div>
        </section>
    )

}

export default About