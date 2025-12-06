import s from './styles.module.scss'

const HowItWorksSection = () => {
    return (
        <section className={s.section} aria-labelledby="how-title">
            <div className={s.container}>
                <h2 id="how-title">Как это работает</h2>

                <ol className={s.steps}>
                    <li className={s.step}>
                        <h3>Шаг 1. Регистрация</h3>
                        <p>Пользователь создаёт аккаунт или входит через существующий.</p>
                    </li>
                    <li className={s.step}>
                        <h3>Шаг 2. Добавление активов</h3>
                        <p>Заполняет данные о брокерских счетах и инструментах.</p>
                    </li>
                    <li className={s.step}>
                        <h3>Шаг 3. Аналитика портфеля</h3>
                        <p>Получает дашборд с ключевыми графиками и метриками.</p>
                    </li>
                    <li className={s.step}>
                        <h3>Шаг 4. Регулярный контроль</h3>
                        <p>Возвращается к приложению и отслеживает изменения.</p>
                    </li>
                </ol>
            </div>
        </section>
    );
};

export { HowItWorksSection };
