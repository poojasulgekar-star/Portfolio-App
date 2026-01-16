export default function Resume() {
    const resume = ["Resume"];
    return (
        <section id="resume"
            className="px-10 w-full my-40 max-w-5xl mx-auto">
            <h2 className="text-center text-6xl text-emerald-500 font-bold">
                Download Resume
            </h2>
            <div className="mt-10 flex gap-5 justify-center 
                            flex-wrap mx-auto max-w-xl">
                {resume.map((resume, index) => {
                    return (
                        <div key={index}
                             className="cursor-pointer px-12 py-10 
                                        rounded bg-emerald-200 text-lg 
                                        flex items-center justify-center 
                                        font-bold hover:shadow-xl">
                            {resume}
                        </div>
                    )})}
            </div>
        </section>
    )
}

