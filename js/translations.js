export const translations = {
        en: {
            pageTitle: 'Jeison Tantachuco, GIS Specialist & Geospatial Developer',

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
                availability: 'Open to remote work',
                button: 'View my work',
                cv: 'Download CV'
            },

            about: {
                title: 'About Me',
                p1:
                    'I am an Agricultural Engineer turned geospatial specialist, currently doing an MSc in Geoinformatics at Eötvös Loránd University in Budapest as a Stipendium Hungaricum scholar.',
                p2:
                    'I have 5+ years of professional experience turning spatial data into decisions: spatial analysis, GIS automation, Earth-observation processing, and geospatial data management across government and retail.',
                p3:
                    'I also work with geospatial databases and servers (PostgreSQL/PostGIS, SQL Server, GeoServer) and build focused web-mapping applications. I work in Spanish (native) and English (B2, IELTS).',
                stack: 'Main stack:'
            },

            skills: {
                title: 'Skills & Tools',
                core: 'Core',
                familiar: 'Also worked with',
                gis: { title: 'GIS & Spatial Analysis' },
                programming: { title: 'Programming & Data' },
                rs: { title: 'Remote Sensing & Earth Observation' },
                databases: { title: 'Databases & Servers' },
                web: { title: 'Web Mapping & Development' },
                tools: { title: 'Tools & Workflow' }
            },

            projects: {
                title: 'My Projects',
                viewApp: 'View app',
                viewCode: 'View code',

                labels: {
                    problem: 'Problem',
                    approach: 'Approach',
                    result: 'Result',
                    limits: 'Limitations'
                },

                isochrones: {
                    title: 'Geospatial Isochrone Viewer',
                    problem:
                        'Which population can reach a given point within a set travel time, and how many people is that?',
                    approach:
                        'A Leaflet app that requests travel-time isochrones from OpenRouteService and intersects them with a PostGIS population layer to sum the residents inside.',
                    result:
                        'An interactive tool that returns catchment polygons and an estimated population count for any location and time budget.',
                    limits:
                        'Population totals inherit the resolution of the census layer; routing uses a generic mobility profile, not local traffic.'
                },

                tsunami: {
                    title: 'Caribbean Tsunami Propagation Explorer',
                    problem:
                        'How long would a tsunami from the 1918 Puerto Rico earthquake take to reach each stretch of coastline?',
                    approach:
                        'Built an arrival-time raster with a least-cost propagation model over GEBCO 2025 bathymetry on a custom Gnomonic projection, then generated 30-minute contours (QGIS, GRASS, GDAL, Python).',
                    result:
                        'A browser animation with timeline playback, coastline masking, and an interactive Leaflet map of modelled travel times.',
                    limits:
                        'The cost surface approximates shallow-water physics: it estimates first-arrival timing, not wave height or run-up.'
                },

                balaton: {
                    title: 'Lake Balaton Surface Temperature Monitor',
                    problem:
                        "Is a given day's lake-surface temperature unusual for the time of year, or is it normal?",
                    approach:
                        'A Google Earth Engine app (supervised internship, ELTE) that flags each observation as unusually warm or cool against a fixed 2003–2022 climatology built per day-of-year window, satellite and day/night stream, from 20 years of MODIS Terra/Aqua LST kept as four separate passes, plus an ERA5-Land weather-context panel. Independently validated against Landsat thermal imagery and the Copernicus climate record.',
                    result:
                        'Reports temperature, anomaly, percentile rank and a thermal-status label, with daily and monthly summaries and downloadable data-quality metadata.',
                    limits:
                        'MODIS LST is cloud-limited and coarse (1 km), and night passes often see only part of the lake; validated for relative anomalies against Landsat and Copernicus, not for absolute calibration.'
                }
            },

            contact: {
                title: 'Get in touch',
                description:
                    'Interested in working together, or have a question about a project? Reach out through any of these channels.',
                location: 'Based in Budapest, Hungary · open to remote work.',
                cv: 'Download CV'
            },

            footer: {
                rights: 'All rights reserved.'
            }
        },

        es: {
            pageTitle: 'Jeison Tantachuco, Especialista GIS y Desarrollador Geoespacial',

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
                availability: 'Disponible para trabajo remoto',
                button: 'Ver mis trabajos',
                cv: 'Descargar CV'
            },

            about: {
                title: 'Sobre Mí',
                p1:
                    'Soy Ingeniero Agrícola reconvertido en especialista geoespacial. Actualmente curso una maestría en Geoinformática en Eötvös Loránd University, en Budapest, como becario de Stipendium Hungaricum.',
                p2:
                    'Tengo más de 5 años de experiencia profesional convirtiendo datos espaciales en decisiones: análisis espacial, automatización GIS, procesamiento de observación de la Tierra y gestión de datos geoespaciales, en los sectores público y retail.',
                p3:
                    'También trabajo con bases de datos y servidores geoespaciales (PostgreSQL/PostGIS, SQL Server, GeoServer) y desarrollo aplicaciones de cartografía web específicas. Me desenvuelvo en español (nativo) e inglés (B2, IELTS).',
                stack: 'Stack principal:'
            },

            skills: {
                title: 'Habilidades y Herramientas',
                core: 'Principal',
                familiar: 'También he trabajado con',
                gis: { title: 'SIG y Análisis Espacial' },
                programming: { title: 'Programación y Datos' },
                rs: { title: 'Teledetección y Observación de la Tierra' },
                databases: { title: 'Bases de Datos y Servidores' },
                web: { title: 'Cartografía Web y Desarrollo' },
                tools: { title: 'Herramientas y Flujo de Trabajo' }
            },

            projects: {
                title: 'Mis Proyectos',
                viewApp: 'Ver aplicación',
                viewCode: 'Ver código',

                labels: {
                    problem: 'Problema',
                    approach: 'Enfoque',
                    result: 'Resultado',
                    limits: 'Limitaciones'
                },

                isochrones: {
                    title: 'Visualizador Geoespacial de Isocronas',
                    problem:
                        '¿Qué población puede llegar a un punto dado dentro de un tiempo de desplazamiento definido, y cuántas personas son?',
                    approach:
                        'Una aplicación en Leaflet que solicita isocronas de tiempo de viaje a OpenRouteService y las intersecta con una capa de población en PostGIS para sumar los habitantes que quedan dentro.',
                    result:
                        'Una herramienta interactiva que devuelve polígonos de alcance y una estimación de población para cualquier ubicación y presupuesto de tiempo.',
                    limits:
                        'Los totales de población heredan la resolución de la capa censal; el ruteo usa un perfil de movilidad genérico, no el tráfico local.'
                },

                tsunami: {
                    title: 'Explorador de Propagación de Tsunamis del Caribe',
                    problem:
                        '¿Cuánto tardaría un tsunami del terremoto de Puerto Rico de 1918 en llegar a cada tramo de costa?',
                    approach:
                        'Se construyó un ráster de tiempos de llegada con un modelo de propagación de costo mínimo sobre la batimetría GEBCO 2025 en una proyección gnomónica personalizada, y luego se generaron contornos de 30 minutos (QGIS, GRASS, GDAL, Python).',
                    result:
                        'Una animación web con reproducción temporal, enmascaramiento de la línea costera y un mapa interactivo de Leaflet con los tiempos de viaje modelados.',
                    limits:
                        'La superficie de costo aproxima la física de aguas someras: estima el tiempo de primera llegada, no la altura de la ola ni el run-up.'
                },

                balaton: {
                    title: 'Monitor de Temperatura Superficial del Lago Balatón',
                    problem:
                        '¿La temperatura superficial del lago de un día dado es inusual para la época del año, o es normal?',
                    approach:
                        'Una aplicación de Google Earth Engine (prácticas supervisadas, ELTE) que marca cada observación como inusualmente cálida o fría frente a una climatología fija 2003–2022 construida por ventana de día del año, satélite y flujo diurno/nocturno, a partir de 20 años de LST de MODIS Terra/Aqua mantenidos como cuatro pasadas separadas, más un panel de contexto meteorológico ERA5-Land. Validada de forma independiente frente a imágenes térmicas de Landsat y el registro climático de Copernicus.',
                    result:
                        'Reporta temperatura, anomalía, rango percentil y una etiqueta de estado térmico, con resúmenes diarios y mensuales y metadatos descargables de calidad de datos.',
                    limits:
                        'El LST de MODIS está limitado por nubes y es grueso (1 km), y las pasadas nocturnas a menudo ven solo parte del lago; validado para anomalías relativas frente a Landsat y Copernicus, no para calibración absoluta.'
                }
            },

            contact: {
                title: 'Contacto',
                description:
                    '¿Te interesa trabajar juntos o tienes una pregunta sobre algún proyecto? Escríbeme por cualquiera de estos canales.',
                location: 'Con base en Budapest, Hungría · disponible para trabajo remoto.',
                cv: 'Descargar CV'
            },

            footer: {
                rights: 'Todos los derechos reservados.'
            }
        }
    };
