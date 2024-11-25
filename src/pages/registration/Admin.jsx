import { Link } from "react-router-dom";
import {
  Business,
  Dashboard as DashboardIcon,
  LocalShipping,
  AccountBalance,
} from "@mui/icons-material"; // Renombrar Dashboard como DashboardIcon

const AdminDashboard = () => {
  const systems = [
    {
      name: "GCF CRM",
      url: "https://sibaja07.crm.dynamics.com/main.aspx?appid=3440dc5d-def0-e911-a816-000d3a58f769&pagetype=entitylist&etn=incident&viewid=7f5b09c6-97b6-ea11-a812-000d3a334ee9&viewType=1039",
      icon: <DashboardIcon className="text-4xl mb-4 text-blue-500" />,
    },
    {
      name: "GCF Comercial",
      url: "https://comercial.logisticacastrofallas.com/login",
      icon: <Business className="text-4xl mb-4 text-green-500" />,
    },
    {
      name: "GCF Aduanas",
      url: "https://aduanas.logisticacastrofallas.com/login",
      icon: <AccountBalance className="text-4xl mb-4 text-red-500" />,
    },
    {
      name: "GCF Panamá",
      url: "https://panama.logisticacastrofallas.com/login",
      icon: <LocalShipping className="text-4xl mb-4 text-green-900" />, // Cambiado a verde oscuro
    },
    {
      name: "GCF Ajustes",
      url: "https://admin.logisticacastrofallas.com/login",
      icon: <DashboardIcon className="text-4xl mb-4 text-purple-500" />,
    },
  ];

  return (
    <div
      className="bg-cover bg-center min-h-screen p-8"
      style={{ backgroundImage: `url('../bg-sign-in-basic.jpg')` }} // Cambiar la ruta de la imagen aquí
    >
      <div className="mb-8">
        <Link to="/" className="flex items-center space-x-2 text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Volver</span>
        </Link>
      </div>

      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
        Sistemas de Gestión GCF
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {systems.map((system, index) => (
          <div
            className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 text-center"
            key={index}
          >
            {system.icon}
            <h6 className="text-lg font-medium text-gray-800 mb-4">
              {system.name}
            </h6>
            <Link to={system.url} className="inline-block">
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                Acceder
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
