
export function Projects() {
    return (
        <div
            id='projects'
            className="
            flex flex-wrap
            space-x-10 m-20
            justify-between
            bg-gray-800
            "
        >
            <h1 className="
            basis-1/4 text-3xl
            bg-gray-800
            ">
                Projects
            </h1>
            <div className="basis-2/4">
                In my schooling I have developed many software projects.
            </div>

            <TLDExpress />
            <NeovimConfiguration />

        </div>
    )

}

function NeovimConfiguration() {
    return (
        <ProjectFrame />
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
            className='grid row-end-1 gap-10'
        >
            <div
                className='flex'
            >
                <h1 className="basis-1/2 text-xl">
                    TLD Express
                </h1>
                <h1 className="basis-1/2">
                    TLD Express, I with a team developed a Kitchen cabinet designer using three.js, react, and Neo4j.
                </h1>
                <video
                    className='basis-1/2 w-1/2'
                    autoPlay muted loop
                    src='/TLDDemo.mp4'
                    width="auto"
                    height="auto"
                />

            </div>
            <div className='flex'
            >
                <div className="basis-1/2 relateive bg-fixed bg-cover h-52 w-52"
                    style={{ backgroundImage: "\Ethan Hrytsak Headshot.jpg" }}

                />
                <h1 className="basis-1/2  text-xl">
                    TLD Express
                    TLD Express, I with a team developed a Kitchen cabinet designer using three.js, react, and Neo4j.
                </h1>

            </div>
        </div>
    )


}
