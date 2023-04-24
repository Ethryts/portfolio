
export function Projects() {
    return (
    <div>
    <div className="text-5xl w-full text-center">Projects</div>
        <TLDExpress />
        <NeovimConfiguration />
    </div>
        // <div
        //     id='projects'
        //     className="
        //     flex flex-wrap
        //     space-x-10 m-20
        //     justify-between
        //     bg-gray-800
        //     "
        // >
        //     <h1 className="
        //     basis-1/4 text-3xl
        //     bg-gray-800
        //     ">
        //         Projects
        //     </h1>
        //     <div className="basis-2/4">
        //         In my schooling I have developed many software projects.
        //     </div>
        //
        //     <TLDExpress />
        //     <NeovimConfiguration />
        //
        // </div>
    )

}

function NeovimConfiguration() {
    return (

        <div
            id='projects'
            className="
            flex space-x-10 m-20
            "
        >



            <div className="basis-3/4 ">
As a software developer, I worked on developing configuration files for Neovim, a modern Lua implementation of Vim. I started by researching and studying the Neovim documentation to understand its features and capabilities.

Then, I developed a configuration file that leveraged the full potential of Neovim's functionality, including the use of plugins, custom mappings, and auto-completion. I also implemented various productivity-enhancing tools, such as syntax highlighting, code folding, and fuzzy searching.
            </div>

            <h1 className="basis-1/4 text-3xl bg-gray-400">
                <a href="https://github.com/Ethryts/Dotfiles" className="">Neovim Configuration</a>
            </h1>
        </div>
    )
}


function ProjectFrame() {
    return (
        <div className="flex
            

            w-full h-36
            "
        >
            <div className="
                bg-blue-300
                "
            >
                Hello
            </div>


            <div className=" w-20 h-20 col-start-1 row-start-2">
                This
            </div>
        </div>

    )

}

function TLDExpress() {
    return (
        <div
            id='projects'
            className="
            flex space-x-10 m-20
            "
        >


            <h1 className="basis-1/5 text-3xl
            bg-gray-400">
                TLDExpress
            </h1>


            <div className="basis-3/5
            bg-orange-500">
As a developer on a cabinet building website project, I played a key role in implementing various features that enabled users to design custom cabinetry. These features included a 3D room builder where users could place and customize cabinets, a material selection tool that allowed users to choose from a variety of cabinet styles, and the integration of the site with a neo4j graph database. Through my contributions to the project, I demonstrated my ability to work collaboratively with a team, effectively manage project tasks, and deliver a high-quality product with a range of complex features that met the clients requirements.
            </div>

            <div className="basis-1/5">
            <video
                    className='basis-1/5 w-4'
                    autoPlay muted loop
                    src='/TLDDemo.mp4'
                    width="auto"
                    height="auto"
                />
            </div>
        </div>
    )

}




