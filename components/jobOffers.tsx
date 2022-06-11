/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon, LocationMarkerIcon, UsersIcon,ClockIcon} from '@heroicons/react/solid';
import InputFiltro from "./inputFiltro";

const positions = [
  {
    id: 1,
    title: 'Back End Developer',        // puesto
    type: 'Fijo',                       // horario
    location: 'Remote',                 // modalidad
    department: 'Engineering',          // Area de conocimiento                  
    jornada: 'Matutina',                // jornada
    idioma: 'English'                    // idioma
  },
  {
    id: 2,
    title: 'Front End Developer',
    type: 'Flexible',
    location: 'Remote',
    department: 'Engineering',
    jornada: 'Matutina',              
    idioma: 'English'
  },
  {
    id: 3,
    title: 'User Interface Designer',
    type: 'Fijo',
    location: 'Remote',
    department: 'Design',               
    jornada: 'Matutina',                
    idioma: 'Deutsch' 
  },
  {
    id: 4,
    title: 'User Interface Designer',
    type: 'Fijo',
    location: 'Remote',
    department: 'Design',               
    jornada: 'Matutina',                
    idioma: 'Italiano' 
  },
  {
    id: 5,
    title: 'User Interface Designer',
    type: 'Flexible',
    location: 'Remote',
    department: 'Design',                   
    jornada: 'Matutina',                
    idioma: 'Français' 
  },
  {
    id: 6,
    title: 'User Interface Designer',
    type: 'Fijo',
    location: 'Remote',
    department: 'Design',              
    jornada: 'Matutina',                
    idioma: 'English' 
  },
  {
    id: 7,
    title: 'Estoy Haciendo una prueba',
    type: 'Flexible',
    location: 'Remote',
    department: 'Design',                  
    jornada: 'Vespertina',                
    idioma: 'Español' 
  },
]

const filtro = ()=>{
  
}

export default function JobOffers() {


  //aqui

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {positions.map((position) => (
          <li key={position.id}>
            <a href="#" className="block hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-indigo-600 truncate">{position.title}</p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                      {position.type}
                    </p>
                    <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${position.idioma ==="Français" && 'bg-blue-100 text-blue-800'} ${position.idioma ==="Italiano" && 'bg-green-100 text-green-800'} ${position.idioma ==="Español" && 'bg-yellow-100 text-yellow-800'} ${position.idioma ==="English" && 'bg-purple-100 text-purple-800'} ${position.idioma ==="Deutsch" && 'bg-red-100 text-red-800'}`}>
                      {position.idioma}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <UsersIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                      {position.department}
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                      {position.location}
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      <ClockIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                      {position.jornada}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
