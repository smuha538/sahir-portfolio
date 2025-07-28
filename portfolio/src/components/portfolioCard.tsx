import { motion } from "motion/react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PortfolioCard(props: {handler: any, descriptionHandler: any, description: string, stackHandler: any, stack: any, titleHandler: any, githubHandler: any, githubLink: string, title: string, image: string}) {

    return(
            <motion.div className="rounded-md border-4 border-purple-600 cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => 
            {props.handler(true); props.descriptionHandler(props.description); props.stackHandler(props.stack); props.titleHandler(props.title);
             props.githubHandler(props.githubLink)}}>
                <img className="h-60 w-96 object-fill" alt={props.title} src={`./images/${props.image}`}></img>
                <div className="bg-yellow-300">
                    <h2 className="text-center py-2 outfit-text text-black">{props.title}</h2>
                </div>
            </motion.div>
    )
}

export default PortfolioCard