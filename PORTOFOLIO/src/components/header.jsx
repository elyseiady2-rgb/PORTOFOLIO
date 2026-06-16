
export default function Header(){
    return (
        <div className="header-main-container">
            <div className='first-container container'>
                <div className="profile" ></div>
                <h1 className="presentation">I'm Elyse, a <br></br> web developer</h1>
                <p className="description">
                    I'm a passionate web developer, third-year university student 
                    based in Antananarivo, Madagascar. Specialized in full-stack 
                    development with JavaScript, Node.js, and Python .
                </p>
            </div>
            <div className='second-container container'>
                <div className="about-me">
                    <h2 className="about-h2">About me</h2>
                    <p className="details">
                        I am a third-year university student with a strong passion for web development.
                        I have been actively learning and honing my skills in this field, and I am eager to contribute to exciting projects and collaborate with like-minded individuals.
                    </p>
                    <a href="#" className="learn-more more">Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 24">
                            <defs>
                                <path id="SVG1pzpbdYY" fill="currentColor" d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"></path>
                            </defs>
                            <use fillRule="evenodd" href="#SVG1pzpbdYY" transform="rotate(-180 5.02 9.505)"></use>
                        </svg>
                    </a>
                </div>
                <div className="my-skills">
                    <h2 className="skills-h2">My Skills</h2>
                    <p className="details">
                        I have a solid foundation in web development, with expertise in front-end and back-end technologies.
                        I am proficient in HTML, CSS, JavaScript, and have experience working with frameworks such as React and Node.js.
                        I am also familiar with database management and version control systems like Git.
                    </p>
                    <a href="#" className="see-portfolio more">Browse portfolio
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 24">
                            <defs>
                                <path id="SVG1pzpbdYY" fill="currentColor" d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"></path>
                            </defs>
                            <use fillRule="evenodd" href="#SVG1pzpbdYY" transform="rotate(-180 5.02 9.505)"></use>
                        </svg>
                    </a>
                </div>

                <div className="follow-me">
                    <a href="#" className="follow-me more">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                        </svg>
                    </a>
                    <a href="#" className="follow-me more">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256">
                            <path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></path>
                        </svg>
                    </a>
                    
                    
                    <a href="#" className="follow-me more">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688a3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65a3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}