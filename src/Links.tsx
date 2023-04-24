import { Farro, Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export function Links() {
    return (

        <div className="mt-10 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">

            <a
                href="#aboutme"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_self"
                rel="noopener noreferrer"
            >
                <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
                    About Me{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
                <p
                    className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
                >
Learn about me

                </p>
            </a>
            <a
                href="#projects"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_self"
                rel="noopener noreferrer"
            >
                <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
                    Projects{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
                <p
                    className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
                >
                    Learn about projects I have done.


                </p>
            </a>

            <a
                href="#workexperience"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_self"
                rel="noopener noreferrer"
            >
                <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
                    Work Experience{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
                <p
                    className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
                >
                    Learn about my work experience.
                </p>
            </a>

            <a
                href="#schooling"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_self"
                rel="noopener noreferrer"
            >
                <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
                    Schooling{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
                <p
                    className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
                >
                    Learn about my education
                </p>
            </a>

        </div>

    )

}
