import { CardProps } from "../assets/interfaces";

export default function Card({ info, name, age, show }: CardProps) {
    if (show) {
        return (
            <article>
                <h2>{name}</h2>
                {/* ternary operator */}
                {age > 4 ? <p>{age}y/o</p> : <p>Underage</p>}
                <p>{info}</p>
            </article>
        )
    } else {
        return null;
    }

};