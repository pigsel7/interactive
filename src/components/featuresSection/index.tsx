import s from './styles.module.scss'


const FeaturesSection = () => {
    return (
        <section className={s.section} aria-labelledby="features-title">
            <div className={s.container}>
                <h2 id="features-title}">Инструменты для анализа портфеля</h2>

                <div className={s.grid}>
                    <div className={s.card}>
                        <h3>Аналитический дашборд</h3>
                        <p>Блок для описания ключевых показателей портфеля.</p>
                    </div>
                    <div className={s.card}>
                        <h3>История доходности</h3>
                        <p>Блок под графики доходности и просадок по периодам.</p>
                    </div>
                    <div className={s.card}>
                        <h3>Структура портфеля</h3>
                        <p>Разбивка по классам активов, валютам и странам.</p>
                    </div>
                    <div className={s.card}>
                        <h3>Сценарии «что если»</h3>
                        <p>Карточка под сценарный анализ и ребалансировку.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { FeaturesSection };
