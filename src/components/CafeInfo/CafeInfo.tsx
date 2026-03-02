import css from './CafeInfo.module.css';

interface CafeInfoProps {
    title: string;
    description: string;
}

function CafeInfo({ title, description }: CafeInfoProps) {
    return (
        <div className={css.container}>
            <h1 className={css.title}>Sip Happens Café</h1>
            <p className={css.description}>
            Please rate our service by selecting one of the options below.
            </p>
        </div>
    );
}

export default CafeInfo;