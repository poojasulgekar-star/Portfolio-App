export default function Contact() {
    return (
        <section id="contact"
                 className="my-40 align-center max-w-5xl mx-auto p-3">
            <h2 className="text-5xl font-bold text-emerald-500 text-center">
                Contact
            </h2>
            <div className="flex gap-5 justify-center 
                        my-10">
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href=
"https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fgeeks_for_geeks%2F&is_from_rle">
                    Instagram:
                    <span className="font-bold">
                        @React_App
                    </span>
                </a>
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href=
"https://twitter.com/geeksforgeeks">
                    Twitter:
                    <span className="font-bold">
                        @React_App
                    </span>
                </a>
            </div>
        </section>
    );
}