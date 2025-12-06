import s from './styles.module.scss'

const FinalCtaSection = () => {
    return (
        <section className={s.section} aria-labelledby="final-cta-title">
            <div className={s.container}>
                <h2 id="final-cta-title">Готовы навести порядок в инвестициях?</h2>
                <p className={s.text}>
                    Перейдите в Invest Forge, соберите портфель и посмотрите, как он выглядит глазами аналитики.
                </p>

                <div className={s.actions}>
                    <button className={s.primaryCta}>Перейти в веб‑приложение</button>
                    <button className={s.secondaryCta}>Посмотреть интерфейс</button>
                </div>

                <p className={s.note}>
                    Ваши данные о портфеле остаются конфиденциальными.
                </p>
            </div>
        </section>
    );
};

export { FinalCtaSection };