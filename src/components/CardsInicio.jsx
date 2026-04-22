const CardsInicio = ({ icon, titulo, descripcion }) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-gray-900 mx-auto mb-6 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{titulo}</h3>
      <p className="text-gray-600">{descripcion}</p>
    </div>
  );
};

export default CardsInicio;