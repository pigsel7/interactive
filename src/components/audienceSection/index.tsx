import s from './styles.module.scss'

const AudienceSection = () => {
    return (
        <section className={s.section} aria-labelledby="audience-title">
            <div className={s.container}>
                <h2 id="audience-title">Для кого создан Invest Forge</h2>

                <div className={s.grid}>
                    <div className={s.card}>
                        <h3>Новички</h3>
                        <p>Простая картинка портфеля без лишней терминологии.</p>
                    </div>
                    <div className={s.card}>
                        <h3>Опытные инвесторы</h3>
                        <p>Более глубокие метрики и детализация структуры.</p>
                    </div>
                    <div className={s.card}>
                        <h3>Инвесторы с несколькими брокерами</h3>
                        <p>Консолидация активов из разных источников.</p>
                    </div>
                    <div className={s.card}>
                        <h3>Инвесторы в ETF и акции</h3>
                        <p>Контроль диверсификации и перегруза по секторам.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { AudienceSection };
