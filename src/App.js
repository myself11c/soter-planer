import React, { useState } from 'react';
import { CheckCircle2, Circle, Calendar, Shield, Globe, Palette, Code, Users, Rocket } from 'lucide-react';

const ProjectPlanner = () => {
  const [completedTasks, setCompletedTasks] = useState(new Set());
  const currentMonth = new Date().getMonth() + 1;
  
  const toggleTask = (taskId) => {
    const newCompleted = new Set(completedTasks);
    if (newCompleted.has(taskId)) {
      newCompleted.delete(taskId);
    } else {
      newCompleted.add(taskId);
    }
    setCompletedTasks(newCompleted);
  };

  const milestones = [
    {
      id: 1,
      title: "Planificación y Estrategia",
      icon: <Shield className="w-6 h-6" />,
      month: "Agosto 2025",
      color: "bg-blue-500",
      tasks: [
        { id: "1-1", text: "Definir objetivos y audiencia objetivo de Soter" },
        { id: "1-2", text: "Investigar competencia en ciberseguridad" },
        { id: "1-3", text: "Crear mapa del sitio y wireframes" },
        { id: "1-4", text: "Definir servicios y propuesta de valor" }
      ]
    },
    {
      id: 2,
      title: "Diseño y Branding",
      icon: <Palette className="w-6 h-6" />,
      month: "Septiembre 2025",
      color: "bg-purple-500",
      tasks: [
        { id: "2-1", text: "Crear logo y identidad visual de Soter" },
        { id: "2-2", text: "Diseñar mockups de páginas principales" },
        { id: "2-3", text: "Seleccionar paleta de colores (confianza/seguridad)" },
        { id: "2-4", text: "Crear banco de imágenes y iconografía" }
      ]
    },
    {
      id: 3,
      title: "Desarrollo Frontend",
      icon: <Code className="w-6 h-6" />,
      month: "Octubre 2025",
      color: "bg-green-500",
      tasks: [
        { id: "3-1", text: "Configurar estructura HTML y CSS responsive" },
        { id: "3-2", text: "Implementar páginas: Inicio, Servicios, Nosotros" },
        { id: "3-3", text: "Crear formularios de contacto y cotización" },
        { id: "3-4", text: "Optimizar para móviles y tablets" }
      ]
    },
    {
      id: 4,
      title: "Contenido y SEO",
      icon: <Globe className="w-6 h-6" />,
      month: "Noviembre 2025",
      color: "bg-orange-500",
      tasks: [
        { id: "4-1", text: "Redactar contenido técnico sobre ciberseguridad" },
        { id: "4-2", text: "Crear casos de estudio y testimonios" },
        { id: "4-3", text: "Optimizar SEO (keywords de ciberseguridad)" },
        { id: "4-4", text: "Configurar Google Analytics y Search Console" }
      ]
    },
    {
      id: 5,
      title: "Lanzamiento",
      icon: <Rocket className="w-6 h-6" />,
      month: "Diciembre 2025",
      color: "bg-red-500",
      tasks: [
        { id: "5-1", text: "Testing final en diferentes navegadores" },
        { id: "5-2", text: "Configurar hosting seguro (SSL certificado)" },
        { id: "5-3", text: "Lanzar página web de Soter" },
        { id: "5-4", text: "Promoción inicial y redes sociales" }
      ]
    }
  ];

  const getProgress = () => {
    const totalTasks = milestones.reduce((acc, milestone) => acc + milestone.tasks.length, 0);
    const completedCount = completedTasks.size;
    return Math.round((completedCount / totalTasks) * 100);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Proyecto Soter</h1>
            <p className="text-gray-600">Página web para consultora de ciberseguridad</p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Progreso general</span>
            <span className="text-sm font-bold text-blue-600">{getProgress()}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-blue-600 h-3 rounded-full transition-all duration-300" 
              style={{width: `${getProgress()}%`}}
            ></div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>Meta: Diciembre 2025</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" />
            <span>{completedTasks.size} tareas completadas</span>
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="space-y-6">
        {milestones.map((milestone) => {
          const milestoneCompleted = milestone.tasks.every(task => completedTasks.has(task.id));
          const milestoneProgress = milestone.tasks.filter(task => completedTasks.has(task.id)).length;
          
          return (
            <div key={milestone.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Milestone Header */}
              <div className={`${milestone.color} p-4 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {milestone.icon}
                    <div>
                      <h2 className="text-xl font-bold">{milestone.title}</h2>
                      <p className="text-blue-100">{milestone.month}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">
                      {milestoneProgress}/{milestone.tasks.length}
                    </div>
                    <div className="text-sm text-blue-100">tareas</div>
                  </div>
                </div>
              </div>

              {/* Tasks */}
              <div className="p-4">
                <div className="space-y-3">
                  {milestone.tasks.map((task) => {
                    const isCompleted = completedTasks.has(task.id);
                    return (
                      <div 
                        key={task.id}
                        className={`flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer hover:bg-gray-50 ${
                          isCompleted ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'
                        }`}
                        onClick={() => toggleTask(task.id)}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                        <span className={`${isCompleted ? 'text-green-800 line-through' : 'text-gray-700'}`}>
                          {task.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tips Section */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-bold text-blue-800 mb-2">💡 Tips para Soter:</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Enfócate en transmitir confianza y profesionalismo</li>
          <li>• Incluye certificaciones y credenciales de ciberseguridad</li>
          <li>• Usa testimonios de clientes para generar credibilidad</li>
          <li>• Considera un blog con artículos sobre amenazas actuales</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectPlanner;