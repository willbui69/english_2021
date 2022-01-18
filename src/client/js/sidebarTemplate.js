async function addSidebarTemplate(){
    const sidebar = document.createElement('template');
    sidebar.innerHTML = `
    <aside class="aside-container">
        <header class="header">
            <h1>
                <a href=".">English - Start Here</a>
            </h1>
            <p>
                <a class="mentorship-program" href="#">Mentorship Program</a>
            </p>
            <p>
                <a class="donate" href="#">Donate</a>
            </p>
            <p>
                <a href="#">V. Dong Bui</a>
                <br>
                <a href="mailto:vandongbui.work@gmail.com">vandongbui.work@gmail.com</a>
                <br>
                <a class="mr-1" href="#">
                <i class="fab fa-facebook"></i>
                </a>
                <a class="mr-1" href="#">
                    <i class="fab fa-github"></i>
                </a>
                <a class="mr-1" href="#">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a class="mr-1" href="#">
                    <i class="fab fa-instagram"></i>
                </a>
                <a class="mr-1" href="#">
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
                        <a href="week_0.html">Week 0</a>
                        Learn How to Learn
                    </span>
                    </li>
                <li>
                    <span class="week">
                        <a href="week_1.html">Week 1</a>
                        Word Classification
                    </span>
                </li>
                <li>
                    <span class="week">
                        <a href="week_2.html">Week 2</a>
                        Sentence Structure
                    </span>
                </li>
                <li>
                    <span class="week">
                        <a href="week_3.html">Week 3</a>
                        Tenses
                    </span>
                </li>
                <li>
                    <span class="week">
                        <a href="week_4.html">Week 4</a>
                        Pronunciation
                    </span>
                </li>
                <li>
                    <span class="week">
                        <a href="week_5.html">Week 5</a>
                        Expression
                    </span>
                </li>
                <li>
                    <span class="week">
                        <a href="week_6.html">Week 6</a>
                        English In Daily Conversation
                    </span>
                </li>
                <li>
                    <span class="week">
                        <a href="week_8.html">Week 7</a>
                        English in Work
                    </span>
                </li>
                <li>
                    <span class="week">
                        <a href="week_8.html">Week 8</a>
                        English in Academia
                    </span>
                </li>
            </ul>
            <hr>
            <ul>
                <li>
                    <span class="academic-integrity">
                        <a href="#">
                            Academic Integrity
                        </a>
                    </span>
                </li>
                <li>
                <span class="academic-integrity">
                    <a href="#">
                        Gradebook
                    </a>
                </span>
            </li>
                <li>
                    <span class="academic-integrity">
                        <a href="#">
                            FAQs
                        </a>
                    </span>
                </li>
                <li>
                    <span class="academic-integrity">
                        <a href="#">
                            Staff
                        </a>
                    </span>
                </li>
                <li>
                <span class="academic-integrity">
                    <a href="#">
                        Syllabus
                    </a>
                </span>
            </li>
            </ul>
            <hr>
            <ul>
                <li>
                    <span class ="research">
                        <a href="#">
                            Research
                        </a>
                    </span>
                </li>
                <li>
                <span class ="shadowing-technique">
                    <a href="#">
                        Shadowing Technique
                    </a>
                </span>
            </li>
                <li>
                    <span class="paraphase-techniques">
                        <a href="#">
                            Paraphase Techniques
                        </a>
                    </span>
                </li>
            </ul>
            <hr>
            <ul>
                <li>
                    <span class="youtube">
                        <a href="#">
                            Youtube
                        </a>
                    </span>
                </li>
                <li>
                <span class="facebook-page">
                    <a href="#">
                        Facebook Page
                    </a>
                </span>
            </li>
            <li>
                <span class="facebook-group">
                    <a href="#">
                        Facebook Group
                    </a>
                </span>
            </li>
            <li>
                <span class="github">
                    <a href="#">
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


