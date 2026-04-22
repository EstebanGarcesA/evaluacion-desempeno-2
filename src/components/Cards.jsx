const ProductCard = ({ icon, titulo, descripcion, precio, onAñadir }) => {
  return (
    <div className="product-card bg-white shadow-lg overflow-hidden">
      <div className="h-80 bg-gray-200 flex items-center justify-center">
        {icon}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{titulo}</h3>
        <p className="text-gray-600 mb-4">{descripcion}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">{precio}</span>
          <button
            className="bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors"
          >
            AÑADIR
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;