export default function({name, quantity, category})
{
    return(
        <section className="border-l-indigo-950 bg-slate-500 p-4" >
            <ul>
                <li className="text-xl font-bold">{name}</li>
                {/* <li className="text-xl font-bold">{quantity}</li> */}
                <li>Buy {quantity} in the {category} section</li>
            </ul>
        </section>
    );
}