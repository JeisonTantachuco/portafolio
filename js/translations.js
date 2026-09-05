export const translations = {
        en: {
            pageTitle: 'Jeison Tantachuco — GIS Specialist & Geospatial Developer',

            logo: 'Jeison Tantachuco',

            nav: {
                home: 'Home',
                about: 'About me',
                skills: 'Skills',
                projects: 'Projects',
                contact: 'Contact'
            },

            hero: {
                greeting: 'Hello, I am',
                role: 'GIS Specialist & Geospatial Developer',
                description:
                    'I turn spatial data into Web GIS applications, Earth-observation tools, and models that support real decisions.',
                location: 'Budapest, Hungary',
                availability: 'Open to worldwide remote roles & contracts',
                button: 'View my work',
                cv: 'Download CV'
            },

            about: {
                title: 'About Me',
                description:
                    'I am an MSc student in Geoinformatics at Eötvös Loránd University in Hungary and a Stipendium Hungaricum scholarship holder. I am an Agricultural Engineer with 5+ years of professional experience in spatial analysis, GIS automation, and geospatial data management. I use ArcGIS, QGIS, Python, and R to transform spatial data into useful information for decision-making. I also have experience with geospatial databases, including PostgreSQL/PostGIS and SQL Server, and hold a B2 level of English demonstrated through IELTS.',
                stack: 'Main stack:'
            },

            skills: {
                title: 'Skills & Tools',
                gis: { title: 'GIS & Spatial Analysis' },
                programming: { title: 'Programming & Data Science' },
                rs: { title: 'Remote Sensing & Earth Observation' },
                databases: { title: 'Databases & Geospatial Servers' },
                web: { title: 'Web Mapping & Development' },
                tools: { title: 'Tools & Workflow' }
            },

            projects: {
                title: 'My Projects',
                viewApp: 'View app',
                viewCode: 'View code',

                isochrones: {
                    title: 'Geospatial Isochrone Viewer',
                    description:
                        'An interactive application that calculates and displays travel-time catchment areas (isochrones), estimating the total population within the selected area. It integrates mapping APIs for real-time demographic analysis.'
                },

                tsunami: {
                    title: 'Caribbean Tsunami Propagation Explorer',
                    description:
                        'Interactive GIS and web-mapping project that reconstructs regional tsunami travel times for the 1918 Puerto Rico earthquake. The model uses GEBCO 2025 bathymetry, a custom Gnomonic projection, and a least-cost propagation model. The resulting arrival-time raster and 30-minute contours were transformed into a browser-based animation with timeline playback, coastline masking, and an interactive Leaflet map.'
                },

                balaton: {
                    title: 'Lake Balaton Surface Temperature Monitor',
                    description:
                        'An interactive Google Earth Engine application that detects and monitors satellite-derived surface-water-temperature anomalies in Lake Balaton, Hungary. Each observation is compared against 2003–2022 climatological baselines for the same basin, season, satellite, and day/night stream, reporting temperature, anomaly, percentile rank, and a thermal-status label. The app combines Terra and Aqua MODIS daily LST, 30 m Landsat 8/9 thermal hotspot maps, and ERA5-Land weather context, with daily and monthly summary views and downloadable data-quality metadata.'
                }
            },

            contact: {
                title: 'Get in touch',
                description:
                    'Interested in working together, or have a question about a project? Reach out through any of these channels.',
                location: 'Based in Budapest, Hungary — available worldwide, remote.',
                cv: 'Download CV'
            },

            footer: {
                rights: 'All rights reserved.'
            }
        },

        es: {
            pageTitle: 'Jeison Tantachuco — Especialista GIS y Desarrollador Geoespacial',

            logo: 'Jeison Tantachuco',

            nav: {
                home: 'Inicio',
                about: 'Sobre mí',
                skills: 'Habilidades',
                projects: 'Proyectos',
                contact: 'Contacto'
            },

            hero: {
                greeting: 'Hola, soy',
                role: 'Especialista GIS y Desarrollador Geoespacial',
                description:
                    'Convierto datos espaciales en aplicaciones Web GIS, herramientas de observación de la Tierra y modelos que respaldan decisiones reales.',
                location: 'Budapest, Hungría',
                availability: 'Disponible para proyectos y contratos remotos en todo el mundo',
                button: 'Ver mis trabajos',
                cv: 'Descargar CV'
            },

            about: {
                title: 'Sobre Mí',
                description:
                    'Soy estudiante de maestría en Geoinformática en Eötvös Loránd University, Hungría, y becario de Stipendium Hungaricum. Soy Ingeniero Agrícola con más de 5 años de experiencia profesional en análisis espacial, automatización GIS y gestión de datos geoespaciales. Utilizo ArcGIS, QGIS, Python y R para transformar datos espaciales en información útil para la toma de decisiones. También tengo experiencia con bases de datos geoespaciales, incluyendo PostgreSQL/PostGIS y SQL Server, y cuento con un nivel B2 de inglés acreditado mediante IELTS.',
                stack: 'Stack principal:'
            },

            skills: {
                title: 'Habilidades y Herramientas',
                gis: { title: 'SIG y Análisis Espacial' },
                programming: { title: 'Programación y Ciencia de Datos' },
                rs: { title: 'Teledetección y Observación de la Tierra' },
                databases: { title: 'Bases de Datos y Servidores Geoespaciales' },
                web: { title: 'Cartografía Web y Desarrollo' },
                tools: { title: 'Herramientas y Flujo de Trabajo' }
            },

            projects: {
                title: 'Mis Proyectos',
                viewApp: 'Ver aplicación',
                viewCode: 'Ver código',

                isochrones: {
                    title: 'Visualizador Geoespacial de Isocronas',
                    description:
                        'Aplicación interactiva que calcula y visualiza áreas de alcance basadas en tiempo de desplazamiento (isocronas), estimando la población total dentro del área seleccionada. Integra APIs de mapeo para análisis demográfico en tiempo real.'
                },

                tsunami: {
                    title: 'Explorador de Propagación de Tsunamis del Caribe',
                    description:
                        'Proyecto interactivo de GIS y cartografía web que reconstruye los tiempos regionales de propagación del tsunami causado por el terremoto de Puerto Rico de 1918. El modelo utiliza la batimetría GEBCO 2025, una proyección gnomónica personalizada y un modelo de propagación de costo mínimo. El ráster de tiempos de llegada y los contornos de 30 minutos resultantes se transformaron en una animación web con reproducción temporal, enmascaramiento de la línea costera y un mapa interactivo de Leaflet.'
                },

                balaton: {
                    title: 'Monitor de Temperatura Superficial del Lago Balatón',
                    description:
                        'Aplicación interactiva de Google Earth Engine que detecta y monitorea anomalías de temperatura superficial del agua derivadas de satélite en el lago Balatón, Hungría. Cada observación se compara con líneas base climatológicas de 2003–2022 para la misma cuenca, estación, satélite y flujo diurno/nocturno, reportando la temperatura, la anomalía, el rango percentil y una etiqueta de estado térmico. La aplicación combina el LST diario de MODIS Terra y Aqua, mapas de puntos calientes térmicos de Landsat 8/9 a 30 m y el contexto meteorológico de ERA5-Land, con vistas de resumen diario y mensual y metadatos descargables de calidad de datos.'
                }
            },

            contact: {
                title: 'Contacto',
                description:
                    '¿Te interesa trabajar juntos o tienes una pregunta sobre algún proyecto? Escríbeme por cualquiera de estos canales.',
                location: 'Con base en Budapest, Hungría — disponible en todo el mundo, en remoto.',
                cv: 'Descargar CV'
            },

            footer: {
                rights: 'Todos los derechos reservados.'
            }
        }
    };
