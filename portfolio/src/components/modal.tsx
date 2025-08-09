import { motion } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Modal(props: {onClose: any, title: string, modalStack: any, modalDescription: string, modalLink: string}){

    return (
        <motion.div
            className="overlay"
            onClick={props.onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="modal-card bg-[url(/images/modal.svg)] border-yellow-300 border-3 rounded"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1,  opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
                <h2 className="text-white text-2xl font-bold outfit-title">{props.title}</h2>
                <h2 className="text-white font-bold mt-5 text-left p-1">What is it?</h2>
                <p className="text-black text-left outfit-text p-1 bg-[url(/images/modal2.svg)] rounded-lg bg-no-repeat bg-cover">{props.modalDescription}</p>
                <h2 className="text-white font-bold mt-5 text-left p-1">Stack</h2>
                <p className="text-white text-left outfit-text p-1">{props.modalStack.map((tech: string, key: string) => (
                                <span
                                key={key}
                                className="bg-yellow-300 text-black py-1 mx-1 px-3 rounded-full text-sm hover:bg-yellow-500 
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                >
                                {tech}
                                </span>
                            ))}</p>
                <div className="mt-5">
                    <a href={props.modalLink} className="text-blue-600 dark:text-blue-500 hover:underline bg-yellow-200" target="_blank"><img src="./images/github.png" alt="github link" width={100} height={100}></img></a>
                </div>
                <button className="mt-5 bg-black" onClick={props.onClose}>Close</button>

            </motion.div>

        </motion.div>
    );
}

export default Modal