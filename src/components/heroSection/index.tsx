import s from './styles.module.scss'

const HeroSection = () => {
    return (
        <section className={s.hero} aria-labelledby="hero-title">
            <header className={s.header}>
                <div className={s.logo}>Invest Forge</div>
                <nav className={s.nav}>
                    <button className={s.navButton}>Войти</button>
                </nav>
            </header>



            <div className={s.content}>
                <div className={s.textBlock}>
                    <h1 id="hero-title" className={s.title}>
                        Соберите и проанализируйте свой инвестиционный портфель в одном месте
                    </h1>
                    <p className={s.subtitle}>
                        Invest Forge помогает частным инвесторам понимать структуру, доходность и риски портфеля.
                    </p>
                    <div className={s.actions}>
                        <button className={s.primaryCta}>Перейти в веб‑приложение</button>
                        <button className={s.secondaryCta}>Посмотреть демо</button>
                    </div>
                </div>

                <div className={s.preview}>
                    <div className={s.mockBrowser}>
                        <div className={s.mockToolbar} />
                        <div className={s.mockContent}>
                            <div className={s.mockSidebar} />
                            <div className={s.mockMain}>
                                <div className={s.mockChart} />
                                <div className={s.mockTable} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export { HeroSection };