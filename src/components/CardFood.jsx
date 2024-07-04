export function CardFood({ title, description, price, image }) {
  return (
    <div className="w-[300px] rounded overflow-hidden shadow-lg">
      <img className="w-full h-[200px]" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 h-full">
        <p className="mb-3">Rp. {price}</p>
        <button className="bg-orange-300 p-3 w-full text-white rounded">+ Add</button>
      </div>
    </div>
  );
}
