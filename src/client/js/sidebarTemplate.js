async function addSidebarTemplate(){
    const sidebar = document.createElement('template');
    sidebar.innerHTML = `
    <aside class="aside-container">
        <header class="header">
            <h1>
                <a href=".">English - Start Here</a>
            </h1>
            <p>
                <a class="mentorship-program" href="mentorship_program.html">Mentorship Program</a>
            </p>
            <p>
                <a class="donate" href="donate.html">Donate</a>
            </p>
            <p>
                <a href="#">V. Dong Bui</a>
                <br>
                <a href="mailto:vandongbui.work@gmail.com">vandongbui.work@gmail.com</a>
                <br>
                <a class="mr-1" href="https://www.facebook.com/will.bui.9619/" target="_blank">
                <i class="fab fa-facebook"></i>
                </a>
                <a class="mr-1" href="https://github.com/willbui69" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
                <a class="mr-1" href="https://www.linkedin.com/in/willbui9619/" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a class="mr-1" href="https://www.instagram.com/will_bui1919/" target="_blank">
                    <i class="fab fa-instagram"></i>
                </a>
                <a class="mr-1" href="https://twitter.com/VanDongBui1" target="_blank">
                    <i class="fab fa-twitter"></i>
                </a>
            </p>
            <button id="toggle-btn" class="toggle-button"> Menu </button>
        </header>
        <nav class="navi-items">
            <hr>
            <ul>
                <li>
                    <span class="week">
                        <a href="week_0.html">Tuần 0</a>
                        Learn How to Learn
                    </span>
                    </li>
                <li>
                    <span class="week">
                        <a href="week_1.html">Tuần 1</a>
                        Word Classification
                    </span>
                </li>
                <li>
                    <span class="week">
                        <a href="week_2.html">Tuần 2</a>
                        Sentence Structure
                    </span>
                </li>
                <li>
                    <span class="week">
                        <a href="week_3.html">Tuần 3</a>
                        Tenses
                    </span>
                </li>
                <li>
                    <span class="week">
                        <a href="week_4.html">Tuần 4</a>
                        Pronunciation
                    </span>
                </li>
                <li>
                    <span class="week">
                        <a href="notfound.html">Tuần 5</a>
                        English Tools & Cyber Safety
                    </span>
                </li>
                <li>
                    <span class="week">
                        <a href="week_6.html">Tuần 6</a>
                        Expression
                    </span>
                </li>
                <li>
                    <span class="week">
                        <a href="notfound.html">Tuần 7</a>
                        English In Daily Conversation
                    </span>
                </li>
                <li>
                    <span class="week">
                        <a href="notfound.html">Tuần 8</a>
                        English in Work
                    </span>
                </li>
                <li>
                    <span class="week">
                        <a href="notfound.html">Tuần 9</a>
                        English in Academia
                    </span>
                </li>
            </ul>
            <hr>
            <ul>
                <li>
                    <span class="academic-integrity">
                        <a href="notfound.html">
                            Academic Integrity
                        </a>
                    </span>
                </li>
                <li>
                    <span class="test">
                        <a href="test.html">
                            Admission Test
                        </a>
                    </span>
                </li>
                <li>
                <span class="academic-integrity">
                    <a href="notfound.html">
                        Gradebook
                    </a>
                </span>
            </li>
                <li>
                    <span class="academic-integrity">
                        <a href="notfound.html">
                            FAQs
                        </a>
                    </span>
                </li>
                <li>
                    <span class="academic-integrity">
                        <a href="notfound.html">
                            Staff
                        </a>
                    </span>
                </li>
                <li>
                <span class="academic-integrity">
                    <a href="notfound.html">
                        Syllabus
                    </a>
                </span>
            </li>
            </ul>
            <hr>
            <ul>
                <li>
                    <span class ="research">
                        <a href="notfound.html">
                            Research
                        </a>
                    </span>
                </li>
                <li>
                <span class ="shadowing-technique">
                    <a href="notfound.html">
                        Shadowing Technique
                    </a>
                </span>
            </li>
                <li>
                    <span class="paraphase-techniques">
                        <a href="notfound.html">
                            Paraphase Techniques
                        </a>
                    </span>
                </li>
            </ul>
            <hr>
            <ul>
                <li>
                    <span class="youtube">
                        <a href="notfound.html">
                            Youtube
                        </a>
                    </span>
                </li>
                <li>
                <span class="facebook-page">
                    <a href="notfound.html">
                        Facebook Page
                    </a>
                </span>
            </li>
            <li>
                <span class="facebook-group">
                    <a href="notfound.html">
                        Facebook Group
                    </a>
                </span>
            </li>
            <li>
                <span class="github">
                    <a href="https://github.com/willbui69">
                        Github
                    </a>
                </span>
            </li>
            </ul>
        </nav>
    </aside>`;
    try {
        document.querySelector('#sidebar').appendChild(sidebar.content);
    }catch(error){
        console.log("error", error);
    }
    
}

export {
    addSidebarTemplate
}


