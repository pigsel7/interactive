import s from './styles.module.scss'


const ValueSection = () => {
    return (
        <section className={s.section} aria-labelledby="value-title">
            <div className={s.container}>
                <h2 id="value-title" className={s.title}>
                    Основная ценность Invest Forge
                </h2>
                <p className={s.lead}>
                    Все ваши инвестиции собираются в единую панель, где видно реальную доходность, просадки и баланс рисков.
                </p>

                <div className={s.problems}>
                    <div className={s.problem}>
                        <h3>Разбросанные брокерские счета</h3>
                        {/*<p>Кратко показываем, как консолидируется информация по разным брокерам.</p>*/}
                    </div>
                    <div className={s.problem}>
                        <h3>Непонятная реальная доходность</h3>
                        <p>Место под текст о том, как считается доходность по периодам.</p>
                    </div>
                    <div className={s.problem}>
                        <h3>Сложно оценить риск портфеля</h3>
                        <p>Условные индикаторы риска и структуры помогут принять решение.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { ValueSection };