interface CardProps {
    info: string;
    name: string;
    age?: number;
}

export default function Card({info, name, age}: CardProps) {
    return (
        <article>
            <h2>{name}</h2>
            <p>{age}y/o</p>
            <p>{info}</p>
        </article>
    )
};