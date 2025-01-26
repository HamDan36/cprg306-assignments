export default function({name, quantity, category})
{
    return(
        <section>
            <ul>
                <li className="text-xl font-bold">{name}</li>
                <li className="text-xl font-bold">{quantity}</li>
                <li>{category}</li>
            </ul>
        </section>
    );
}