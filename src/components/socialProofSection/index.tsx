import s from './styles.module.scss'

export const SocialProofSection = () => {
    return (
        <section className={s.section} aria-labelledby="social-proof-title">
            <div className={s.container}>
                <h2 id="social-proof-title">Пользователи уже наводят порядок</h2>

                <div className={s.metrics}>
                    <div className={s.metric}>
                        <span className={s.metricValue}>N+</span>
                        <span className={s.metricLabel}>пользователей</span>
                    </div>
                    <div className={s.metric}>
                        <span className={s.metricValue}>X</span>
                        <span className={s.metricLabel}>инструментов в среднем в портфеле</span>
                    </div>
                    <div className={s.metric}>
                        <span className={s.metricValue}>Y</span>
                        <span className={s.metricLabel}>раз в неделю заходят в приложение</span>
                    </div>
                </div>

                <div className={s.testimonials}>
                    <article className={s.card}>
                        <p>Короткий отзыв пользователя о том, как сервис помог увидеть реальную картину портфеля.</p>
                        {/*<span className={s.author}>— А., частный инвестор</span>*/}
                    </article>
                    <article className={s.card}>
                        <p>Отзыв о том, что стало проще следить за несколькими брокерскими счетами.</p>
                        {/*<span className={s.author}>— Н., инвестор с опытом</span>*/}
                    </article>
                </div>
            </div>
        </section>
    );
};
