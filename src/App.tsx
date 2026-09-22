import { useEffect, useState } from 'react'
import type { TouchEvent } from 'react'
import './styles.css'

type Project = {
    title: string
    category: string
    description: string
    technologies: string[]
    status: string
    accent: string
}

const slides = [
    'HOME',
    'ABOUT',
    'STACK',
    'CLOUDVAULT',
    'PROJECTS',
    'JOURNEY',
    'CONTACT',
]

const technologies = [
    'Linux',
    'Ubuntu',
    'SSH',
    'Nginx',
    'Networking',
    'Docker',
    'Python',
    'FastAPI',
    'PostgreSQL',
    'Git',
    'GitHub',
]

const currentlyLearning = [
    'AWS',
    'Terraform',
    'Kubernetes',
    'CI/CD',
    'Monitoring',
    'Cloud Security',
]

const projects: Project[] = [
    {
        title: 'CloudVault',
        category: 'Cloud Engineering',
        description:
            'A hands-on cloud engineering platform built around Linux servers, Nginx, APIs, Docker and PostgreSQL, with AWS and cloud security as the next layer.',
        technologies: [
            'Linux',
            'Nginx',
            'FastAPI',
            'Docker',
            'PostgreSQL',
        ],
        status: 'IN DEVELOPMENT',
        accent: '01',
    },
    {
        title: 'Linux Server Deployment',
        category: 'Linux / DevOps',
        description:
            'A practical server environment focused on Linux administration, SSH, Nginx, systemd services, permissions, networking and troubleshooting.',
        technologies: [
            'Linux',
            'SSH',
            'Nginx',
            'systemctl',
        ],
        status: 'COMPLETED',
        accent: '02',
    },
    {
        title: 'Weather & AQI Dashboard',
        category: 'Data Engineering',
        description:
            'A Python dashboard combining weather and air-quality data into an interactive monitoring interface using external APIs and visualization tools.',
        technologies: [
            'Python',
            'Pandas',
            'Plotly',
            'Streamlit',
        ],
        status: 'COMPLETED',
        accent: '03',
    },
    {
        title: 'Bitcoin Market Analysis',
        category: 'Data Analysis',
        description:
            'A market-analysis project using historical cryptocurrency data, Pandas and Plotly to explore price movement through interactive candlestick visualizations.',
        technologies: [
            'Python',
            'Pandas',
            'Plotly',
            'CoinGecko',
        ],
        status: 'COMPLETED',
        accent: '04',
    },
    {
        title: 'OpenGL Mini Engine',
        category: 'Graphics Programming',
        description:
            'A C++ graphics experiment covering OpenGL rendering, GLFW, GLAD, GLM, camera movement, 3D geometry and a basic rendering environment.',
        technologies: [
            'C++',
            'OpenGL',
            'GLFW',
            'GLAD',
            'GLM',
        ],
        status: 'COMPLETED',
        accent: '05',
    },
    {
        title: 'Transaction Fraud Detection',
        category: 'Machine Learning',
        description:
            'An academic machine-learning project exploring transaction data, preprocessing and classification techniques for fraud detection.',
        technologies: [
            'Python',
            'Pandas',
            'scikit-learn',
            'ML',
        ],
        status: 'ACADEMIC',
        accent: '06',
    },
]

const journey = [
    {
        number: '01',
        name: 'Linux',
        status: 'DONE',
        state: 'done',
    },
    {
        number: '02',
        name: 'Networking',
        status: 'DONE',
        state: 'done',
    },
    {
        number: '03',
        name: 'Docker',
        status: 'DONE',
        state: 'done',
    },
    {
        number: '04',
        name: 'AWS',
        status: 'NEXT',
        state: 'current',
    },
    {
        number: '05',
        name: 'Kubernetes',
        status: 'UPCOMING',
        state: '',
    },
    {
        number: '06',
        name: 'Terraform',
        status: 'UPCOMING',
        state: '',
    },
    {
        number: '07',
        name: 'CI/CD',
        status: 'UPCOMING',
        state: '',
    },
    {
        number: '08',
        name: 'Monitoring',
        status: 'UPCOMING',
        state: '',
    },
    {
        number: '09',
        name: 'Cloud Security',
        status: 'FUTURE',
        state: '',
    },
]

function GithubIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                fill="currentColor"
                d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.16c-3.2.7-3.87-1.35-3.87-1.35-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.08.78 2.18v3.23c0 .31.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
            />
        </svg>
    )
}

function LinkedinIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                fill="currentColor"
                d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.67H9.35V8.99h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z"
            />
        </svg>
    )
}

function EmailIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                fill="currentColor"
                d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
            />
        </svg>
    )
}

function App() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [projectIndex, setProjectIndex] = useState(0)
    const [touchStart, setTouchStart] =
        useState<number | null>(null)

    const goToSlide = (index: number) => {
        const nextIndex = Math.max(
            0,
            Math.min(slides.length - 1, index),
        )

        setCurrentSlide(nextIndex)

        const hash =
            nextIndex === 0
                ? ''
                : `#${slides[nextIndex].toLowerCase()}`

        window.history.replaceState(
            null,
            '',
            `${window.location.pathname}${hash}`,
        )
    }

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            goToSlide(currentSlide + 1)
        }
    }

    const previousSlide = () => {
        if (currentSlide > 0) {
            goToSlide(currentSlide - 1)
        }
    }

    const nextProject = () => {
        setProjectIndex(
            (current) => (current + 1) % projects.length,
        )
    }

    const previousProject = () => {
        setProjectIndex(
            (current) =>
                (current - 1 + projects.length) %
                projects.length,
        )
    }

    useEffect(() => {
        const hash = window.location.hash
            .replace('#', '')
            .toUpperCase()

        if (hash) {
            const index = slides.indexOf(hash)

            if (index >= 0) {
                setCurrentSlide(index)
            }
        }
    }, [])

    useEffect(() => {
        const handleKeyboard = (
            event: KeyboardEvent,
        ) => {
            if (
                event.target instanceof HTMLInputElement ||
                event.target instanceof HTMLTextAreaElement
            ) {
                return
            }

            if (
                event.key === 'ArrowRight' ||
                event.key === 'PageDown'
            ) {
                event.preventDefault()
                nextSlide()
            }

            if (
                event.key === 'ArrowLeft' ||
                event.key === 'PageUp'
            ) {
                event.preventDefault()
                previousSlide()
            }

            if (event.key === 'Home') {
                event.preventDefault()
                goToSlide(0)
            }

            if (event.key === 'End') {
                event.preventDefault()
                goToSlide(slides.length - 1)
            }
        }

        window.addEventListener(
            'keydown',
            handleKeyboard,
        )

        return () => {
            window.removeEventListener(
                'keydown',
                handleKeyboard,
            )
        }
    })

    const handleTouchStart = (
        event: TouchEvent,
    ) => {
        setTouchStart(
            event.changedTouches[0].clientX,
        )
    }

    const handleTouchEnd = (
        event: TouchEvent,
    ) => {
        if (touchStart === null) {
            return
        }

        const touchEnd =
            event.changedTouches[0].clientX

        const difference =
            touchStart - touchEnd

        if (Math.abs(difference) > 55) {
            if (difference > 0) {
                nextSlide()
            } else {
                previousSlide()
            }
        }

        setTouchStart(null)
    }

    const project = projects[projectIndex]

    return (
        <main
            className="app-shell"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* HEADER */}

            <header className="topbar">
                <button
                    className="brand"
                    onClick={() => goToSlide(0)}
                    aria-label="Go to home"
                >
                    <span className="brand-mark">
                        <img
                            src="/ab-mark-transparent.png"
                            alt="AB"
                        />
                    </span>

                    <span className="brand-name">
                        ARIHANT
                        <span className="brand-muted">
                            {' '}
                            / BHUWAD
                        </span>
                    </span>
                </button>

                <div className="header-center">
                    <span className="slide-counter">
                        <strong>
                            {String(
                                currentSlide + 1,
                            ).padStart(2, '0')}
                        </strong>

                        <span> / 07</span>
                    </span>

                    <span className="counter-line" />

                    <span className="slide-counter">
                        {slides[currentSlide]}
                    </span>
                </div>

                <a
                    href="/resume.pdf"
                    download="Arihant-Bhuwad-Resume.pdf"
                    className="resume-link"
                >
                    RESUME
                    <span>↓</span>
                </a>
            </header>

            {/* SIDE NAV */}

            <nav
                className="side-nav"
                aria-label="Portfolio sections"
            >
                {slides.map((slide, index) => (
                    <button
                        key={slide}
                        className={`nav-item ${currentSlide === index
                                ? 'active'
                                : ''
                            }`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to ${slide}`}
                        title={slide}
                    >
                        <span className="nav-number">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </button>
                ))}
            </nav>

            {/* HOME */}

            <section
                className={`slide ${currentSlide === 0 ? 'active' : ''
                    }`}
            >
                <div className="slide-content hero-layout">
                    <div className="hero-copy">
                        <div className="eyebrow">
                            THIRD-YEAR IT STUDENT // CLOUD
                            ENGINEERING
                        </div>

                        <div className="hero-kicker">
                            BUILD <span>/</span> LEARN <span>/</span>{' '}
                            DEPLOY
                        </div>

                        <h1 className="hero-title">
                            Infrastructure
                            <br />
                            <span>today.</span>
                            <br />
                            Security
                            <br />
                            tomorrow.
                        </h1>

                        <p className="hero-description">
                            I build practical systems around Linux,
                            backend engineering, networking and cloud
                            technologies while developing toward cloud
                            engineering and cloud security.
                        </p>

                        <div className="hero-actions">
                            <button
                                className="button button-primary"
                                onClick={() => goToSlide(4)}
                            >
                                VIEW MY WORK
                                <span className="button-arrow">
                                    →
                                </span>
                            </button>

                            <button
                                className="button button-secondary"
                                onClick={() => goToSlide(6)}
                            >
                                GET IN TOUCH
                                <span className="button-arrow">
                                    ↗
                                </span>
                            </button>
                        </div>

                        <div className="hero-links">
                            <a
                                href="https://github.com/ArihantBhuwad"
                                target="_blank"
                                rel="noreferrer"
                                className="social-icon"
                                aria-label="GitHub"
                                title="GitHub"
                            >
                                <GithubIcon />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/arihant-bhuwad-960329320/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-icon"
                                aria-label="LinkedIn"
                                title="LinkedIn"
                            >
                                <LinkedinIcon />
                            </a>

                            <a
                                href="mailto:arihantppb007@gmail.com"
                                className="social-icon"
                                aria-label="Email"
                                title="Email"
                            >
                                <EmailIcon />
                            </a>
                        </div>
                    </div>

                    <div
                        className="hero-visual"
                        aria-hidden="true"
                    >
                        <div className="command-center">
                            <div className="command-grid" />

                            <div className="command-label">
                                CLOUD OPERATIONS / 001
                            </div>

                            <div className="orbit" />
                            <div className="orbit two" />

                            <div className="core">
                                <span>AB / SYS</span>
                            </div>

                            <div className="node one" />
                            <div className="node two" />
                            <div className="node three" />

                            <div className="server-stack">
                                <div className="server">
                                    SERVER 01
                                </div>

                                <div className="server">
                                    API NODE
                                </div>

                                <div className="server">
                                    DATABASE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT */}

            <section
                className={`slide ${currentSlide === 1 ? 'active' : ''
                    }`}
            >
                <div className="slide-content about-layout">
                    <div className="about-copy">
                        <div className="eyebrow">
                            02 / ABOUT
                        </div>

                        <h2 className="section-title">
                            I learn systems
                            <br />
                            by <span>building them.</span>
                        </h2>

                        <p>
                            I'm a third-year Information Technology
                            engineering student focused on Cloud
                            Engineering and Cloud Security.
                        </p>

                        <p>
                            My approach is hands-on: understand the
                            underlying system, build it locally, break
                            it, troubleshoot it and document what I
                            learned.
                        </p>
                    </div>

                    <div className="about-metrics">
                        <div className="metric-card">
                            <div className="metric-number">
                                01
                            </div>

                            <div className="metric-label">
                                Linux-first approach to
                                infrastructure.
                            </div>
                        </div>

                        <div className="metric-card">
                            <div className="metric-number">
                                02
                            </div>

                            <div className="metric-label">
                                Backend systems with APIs and
                                databases.
                            </div>
                        </div>

                        <div className="metric-card">
                            <div className="metric-number">
                                03
                            </div>

                            <div className="metric-label">
                                Networking and server fundamentals.
                            </div>
                        </div>

                        <div className="metric-card">
                            <div className="metric-number">
                                04
                            </div>

                            <div className="metric-label">
                                Moving toward cloud security and
                                DevOps.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STACK */}

            <section
                className={`slide ${currentSlide === 2 ? 'active' : ''
                    }`}
            >
                <div className="slide-content stack-layout">
                    <div>
                        <div className="eyebrow">
                            03 / STACK
                        </div>

                        <h2 className="section-title">
                            Tools I use to
                            <br />
                            <span>build systems.</span>
                        </h2>

                        <div className="stack-grid">
                            {technologies.map(
                                (technology) => (
                                    <div
                                        className="stack-item"
                                        key={technology}
                                    >
                                        {technology}
                                    </div>
                                ),
                            )}
                        </div>
                    </div>

                    <div className="learning-panel">
                        <div className="learning-title">
                            CURRENTLY BUILDING TOWARD
                        </div>

                        <div className="learning-list">
                            {currentlyLearning.map(
                                (technology) => (
                                    <div
                                        className="learning-item"
                                        key={technology}
                                    >
                                        <span>
                                            {technology}
                                        </span>

                                        <span className="learning-status">
                                            NEXT
                                        </span>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* CLOUDVAULT */}

            <section
                className={`slide ${currentSlide === 3 ? 'active' : ''
                    }`}
            >
                <div className="slide-content cloudvault-layout">
                    <div className="cloudvault-copy">
                        <div className="eyebrow">
                            04 / FLAGSHIP PROJECT
                        </div>

                        <h2 className="section-title">
                            <span>CloudVault</span>
                            <br />
                            is where
                            <br />
                            theory becomes
                            <br />
                            infrastructure.
                        </h2>

                        <p>
                            A practical cloud engineering project
                            built around Linux, Nginx, FastAPI,
                            PostgreSQL and Docker — designed to grow
                            into a deeper AWS, DevOps and security
                            environment.
                        </p>

                        <div className="hero-actions">
                            <button
                                className="button button-primary"
                                onClick={() => goToSlide(4)}
                            >
                                EXPLORE PROJECTS
                                <span className="button-arrow">
                                    →
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="architecture">
                        <div className="architecture-card">
                            <div className="architecture-flow">
                                <div className="arch-node">
                                    <strong>USER</strong>
                                    <span>CLIENT</span>
                                </div>

                                <div className="arch-arrow">
                                    →
                                </div>

                                <div className="arch-node">
                                    <strong>NGINX</strong>
                                    <span>SERVER</span>
                                </div>

                                <div className="arch-arrow">
                                    →
                                </div>

                                <div className="arch-node">
                                    <strong>API</strong>
                                    <span>FASTAPI</span>
                                </div>

                                <div className="arch-arrow">
                                    →
                                </div>

                                <div className="arch-node">
                                    <strong>DB</strong>
                                    <span>POSTGRESQL</span>
                                </div>
                            </div>

                            <div className="arch-footer">
                                <div className="arch-tag">
                                    LINUX
                                </div>

                                <div className="arch-tag">
                                    DOCKER
                                </div>

                                <div className="arch-tag">
                                    AWS / NEXT
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS */}

            <section
                className={`slide ${currentSlide === 4 ? 'active' : ''
                    }`}
            >
                <div className="slide-content projects-layout">
                    <div>
                        <div className="eyebrow">
                            05 / PROJECTS
                        </div>

                        <div className="project-index">
                            PROJECT {project.accent} /{' '}
                            {String(projects.length).padStart(
                                2,
                                '0',
                            )}
                        </div>

                        <h2 className="project-title">
                            {project.title}
                        </h2>

                        <div className="project-type">
                            {project.category}
                        </div>

                        <p className="project-description">
                            {project.description}
                        </p>

                        <div className="project-tags">
                            {project.technologies.map(
                                (technology) => (
                                    <span
                                        className="project-tag"
                                        key={technology}
                                    >
                                        {technology}
                                    </span>
                                ),
                            )}
                        </div>

                        <div className="project-status">
                            {project.status}
                        </div>

                        <div className="project-controls">
                            <button
                                onClick={previousProject}
                                aria-label="Previous project"
                            >
                                ←
                            </button>

                            <button
                                onClick={nextProject}
                                aria-label="Next project"
                            >
                                →
                            </button>
                        </div>
                    </div>

                    <div
                        className="project-visual"
                        aria-hidden="true"
                    >
                        <div className="project-core">
                            <div className="project-core-label">
                                {project.accent} / SYS
                            </div>
                        </div>

                        <div className="project-orbit orbit-a" />
                        <div className="project-orbit orbit-b" />

                        <div className="project-floating-label label-a">
                            BUILD
                        </div>

                        <div className="project-floating-label label-b">
                            DEPLOY
                        </div>

                        <div className="project-floating-label label-c">
                            DEBUG
                        </div>
                    </div>
                </div>
            </section>

            {/* JOURNEY */}

            <section
                className={`slide ${currentSlide === 5 ? 'active' : ''
                    }`}
            >
                <div className="slide-content journey-layout">
                    <div>
                        <div className="eyebrow">
                            06 / JOURNEY
                        </div>

                        <h2 className="section-title">
                            Building the
                            <br />
                            <span>infrastructure stack.</span>
                        </h2>

                        <div className="roadmap">
                            {journey.map((step) => (
                                <div
                                    className={`road-step ${step.state}`}
                                    key={step.number}
                                >
                                    <div className="road-dot" />

                                    <div className="road-number">
                                        {step.number}
                                    </div>

                                    <div className="road-name">
                                        {step.name}
                                    </div>

                                    <div className="road-status">
                                        {step.status}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="terminal">
                        <div className="terminal-top">
                            <span className="terminal-dot" />
                            <span className="terminal-dot" />
                            <span className="terminal-dot" />
                        </div>

                        <div className="terminal-body">
                            <div>
                                <span className="prompt">
                                    $
                                </span>{' '}
                                whoami
                            </div>

                            <div>
                                arihant@cloud-lab
                            </div>

                            <br />

                            <div>
                                <span className="prompt">
                                    $
                                </span>{' '}
                                current_focus
                            </div>

                            <div>
                                cloud engineering
                            </div>

                            <div>
                                linux + networking
                            </div>

                            <div>
                                backend systems
                            </div>

                            <br />

                            <div>
                                <span className="prompt">
                                    $
                                </span>{' '}
                                next
                            </div>

                            <div className="success">
                                AWS → Kubernetes → Terraform
                            </div>

                            <br />

                            <div>
                                <span className="prompt">
                                    $
                                </span>{' '}
                                status
                            </div>

                            <div className="success">
                                learning / building / deploying
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT */}

            <section
                className={`slide ${currentSlide === 6 ? 'active' : ''
                    }`}
            >
                <div className="slide-content contact-layout">
                    <div>
                        <div className="eyebrow">
                            07 / CONTACT
                        </div>

                        <h2 className="section-title">
                            Let's build
                            <br />
                            something
                            <br />
                            <span>interesting.</span>
                        </h2>

                        <p className="section-description">
                            Open to conversations around cloud
                            engineering, backend development, DevOps,
                            internships, projects and technical
                            collaborations.
                        </p>

                        <div className="contact-actions">
                            <a
                                href="mailto:arihantppb007@gmail.com"
                                className="button button-primary"
                            >
                                SEND EMAIL
                                <span className="button-arrow">
                                    ↗
                                </span>
                            </a>

                            <a
                                href="https://github.com/ArihantBhuwad"
                                target="_blank"
                                rel="noreferrer"
                                className="button button-secondary"
                            >
                                GITHUB
                                <span className="button-arrow">
                                    ↗
                                </span>
                            </a>
                        </div>

                        <div className="contact-socials">
                            <a
                                href="https://github.com/ArihantBhuwad"
                                target="_blank"
                                rel="noreferrer"
                                className="social-icon large"
                                aria-label="GitHub"
                                title="GitHub"
                            >
                                <GithubIcon />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/arihant-bhuwad-960329320/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-icon large"
                                aria-label="LinkedIn"
                                title="LinkedIn"
                            >
                                <LinkedinIcon />
                            </a>

                            <a
                                href="mailto:arihantppb007@gmail.com"
                                className="social-icon large"
                                aria-label="Email"
                                title="Email"
                            >
                                <EmailIcon />
                            </a>
                        </div>
                    </div>

                    <div className="contact-panel">
                        <div className="contact-panel-title">
                            CONNECTION TERMINAL
                        </div>

                        <p>
                            The easiest way to reach me is through
                            email or LinkedIn.
                        </p>

                        <div className="contact-links">
                            <a
                                href="mailto:arihantppb007@gmail.com"
                                className="contact-link"
                            >
                                <span>
                                    <EmailIcon />
                                    EMAIL
                                </span>

                                <span>↗</span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/arihant-bhuwad-960329320/"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-link"
                            >
                                <span>
                                    <LinkedinIcon />
                                    LINKEDIN
                                </span>

                                <span>↗</span>
                            </a>

                            <a
                                href="https://github.com/ArihantBhuwad"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-link"
                            >
                                <span>
                                    <GithubIcon />
                                    GITHUB
                                </span>

                                <span>↗</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* BOTTOM NAVIGATION */}

            <div className="bottom-nav">
                <button
                    className="bottom-button"
                    onClick={previousSlide}
                    disabled={currentSlide === 0}
                    aria-label="Previous slide"
                >
                    ←
                </button>

                <div className="slide-dots">
                    {slides.map((slide, index) => (
                        <button
                            key={slide}
                            className={`slide-dot ${currentSlide === index
                                    ? 'active'
                                    : ''
                                }`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to ${slide}`}
                        />
                    ))}
                </div>

                <button
                    className="bottom-button"
                    onClick={nextSlide}
                    disabled={
                        currentSlide === slides.length - 1
                    }
                    aria-label="Next slide"
                >
                    →
                </button>
            </div>

            <div className="keyboard-hint">
                <kbd>←</kbd>
                <kbd>→</kbd>
                NAVIGATE
            </div>
        </main>
    )
}

export default App