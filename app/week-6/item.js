// export default function({name, quantity, category})
// {
//     return(
//         <section className="border-l-indigo-950 bg-slate-500 p-4" >
//             <ul>
//                 <li className="text-xl font-bold">{name}</li>
//                 {/* <li className="text-xl font-bold">{quantity}</li> */}
//                 <li>Buy {quantity} in the {category} section</li>
//             </ul>
//         </section>
//     );
// }

export default function Item({ name, quantity, category }) {
    return (
      <section className="bg-red-300 rounded-xl shadow-md p-4 border border-gray-200 max-w-md hover:shadow-lg transition">
        <ul>
          <li className="text-xl font-bold text-gray-800 mb-1">{name}</li>
          <li className="text-gray-600">Buy {quantity} in the <span className="font-medium text-gray-700">{category}</span> section</li>
        </ul>
      </section>
    );
  }
  