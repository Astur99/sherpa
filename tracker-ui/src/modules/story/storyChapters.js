const guide = (slug) => `https://tarkov.help/en/quest/${slug}`;

// Storyteller is Tarkov Help's grouping for these narrative chapters, not a trader.
export const storyChapters = [
  {
    id: 'release',
    title: 'Start of the storyline for release 1.0',
    titleEs: 'Inicio de la historia de lanzamiento 1.0',
    maps: ['Ground Zero'],
    summary: 'The starting hub: complete the opening objective to expose the parallel story routes.',
    summaryEs: 'Nodo de entrada: completa el objetivo inicial para desbloquear las rutas narrativas paralelas.',
    stepsEs: ['Completa el arranque de la historia de lanzamiento.', 'Elige una de las rutas que aparecen tras el inicio; varias pueden avanzar de forma independiente.', 'Consulta la guía del capítulo elegido antes de llevar objetos de misión.'],
    guideUrl: guide('release-escape-from-tarkov-10')
  },
  {
    id: 'tour',
    title: 'Tour',
    titleEs: 'Tour',
    maps: ['Ground Zero', 'Interchange', 'Customs', 'Factory', 'Woods', 'Shoreline', 'The Lab'],
    summary: 'Tutorial and access route. Survive the guided map sequence, speak to the traders and unlock the required locations.',
    summaryEs: 'Ruta de tutorial y acceso. Sobrevive la secuencia guiada, habla con los comerciantes y desbloquea las localizaciones requeridas.',
    stepsEs: ['Completa el tutorial de Ground Zero y habla con Therapist, Ragman, Skier y Mechanic cuando se actualice el objetivo.', 'Sobrevive las extracciones de las localizaciones que va habilitando la cadena.', 'Reúne los materiales de construcción y los pagos requeridos; explora Labs solo cuando tengas acceso y prepara las rutas de salida.'],
    guideUrl: guide('tour')
  },
  {
    id: 'falling-skies',
    title: 'Falling Skies',
    titleEs: 'Falling Skies',
    maps: ['Woods', 'Shoreline'],
    summary: 'Investigate the crashed aircraft, follow its evidence trail and make the Armored Case choice that affects later routes.',
    summaryEs: 'Investiga el avión estrellado, sigue las pruebas y toma la decisión sobre el Armored Case que condiciona rutas posteriores.',
    stepsEs: ['Encuentra el avión estrellado en Woods y sigue la cadena de diálogo con Therapist y Prapor.', 'Recupera las pruebas y el Black Box, realiza la entrega indicada en Shoreline y reúne los componentes solicitados.', 'Al recuperar el Armored Case, revisa Decisiones y finales antes de entregarlo a Prapor o conservarlo.'],
    guideUrl: guide('falling-skies'),
    decision: true
  },
  {
    id: 'they-are-already-here',
    title: 'They Are Already Here',
    titleEs: 'They Are Already Here',
    maps: ['Customs'],
    summary: 'A story branch centred on the marked room key 314 and its follow-up investigation.',
    summaryEs: 'Rama narrativa centrada en la llave de la habitación marcada 314 y su investigación posterior.',
    stepsEs: ['Inicia la ruta al encontrar una nota en una habitación marcada, entrar en una de ellas o eliminar un cultista.', 'Ve a la aldea inundada de Lighthouse y registra la casa indicada.', 'Recoge la llave y la cinta, extrae y escucha la cinta para actualizar la misión.'],
    guideUrl: guide('they-are-already-here')
  },
  {
    id: 'batya',
    title: 'Batya',
    titleEs: 'Batya',
    maps: ['Customs'],
    summary: 'Follow the lead from the shack patch and collect the evidence required by this branch.',
    summaryEs: 'Sigue la pista del parche de la cabaña y reúne las pruebas que exige esta rama.',
    stepsEs: ['Pregunta a los comerciantes por los Bogatyrs y localiza sus puestos y el lugar de la emboscada.', 'Guarda cada marca de pertenencia y los registros que encuentres; no los entregues hasta tener el conjunto solicitado.', 'Con Inteligencia nivel 3 y acceso a Lightkeeper, entrega las pruebas de la cadena en el orden que marque la misión.'],
    guideUrl: guide('batya')
  },
  {
    id: 'accidental-witness',
    title: 'Accidental Witness',
    titleEs: 'Testigo accidental',
    maps: ['Customs'],
    summary: 'Investigate Kozlov’s lead around the dorms and continue the branch from the recovered information.',
    summaryEs: 'Investiga la pista de Kozlov junto a los dormitorios y continúa la rama con la información recuperada.',
    stepsEs: ['Localiza el coche blanco de Kozlov en Customs y lee la nota de la habitación 110 de los dormitorios.', 'Sigue las pistas de Anastasia y del contacto de Skier, leyendo los documentos que actualicen el objetivo.', 'Investiga el lugar del ataque, el escondite de Reshala y el refugio de Kozlov antes de entregar las pruebas.'],
    guideUrl: guide('accidental-witness')
  },
  {
    id: 'blue-fire',
    title: 'Blue Fire',
    titleEs: 'Fuego azul',
    maps: ['Woods'],
    summary: 'EMERCOM-focused storyline that begins at Woods and advances through its discovered notes.',
    summaryEs: 'Cadena centrada en EMERCOM que comienza en Woods y avanza a partir de sus notas encontradas.',
    stepsEs: ['Busca el folleto en el área EMERCOM de Woods, dentro de los contenedores del campamento.', 'Vuelve al escondite y habla con Mechanic para activar la siguiente búsqueda.', 'Investiga el dispositivo en Epicenter o Streets; prepara la llave de la habitación marcada si la ruta la solicita.'],
    guideUrl: guide('blue-fire')
  },
  {
    id: 'unheard',
    title: 'The Unheard',
    titleEs: 'Los no oídos',
    maps: ['Streets of Tarkov'],
    summary: 'Investigate the Unknowns storyline in the Cardinal Residential Complex and TerraGroup security office.',
    summaryEs: 'Investiga la cadena de los Desconocidos en Cardinal Residential Complex y la oficina de seguridad de TerraGroup.',
    stepsEs: ['Entra en la oficina de seguridad de TerraGroup, bloque B de Cardinal en Streets, y recoge la nota.', 'Como alternativa de inicio, revisa la oficina de TerraGroup de Ground Zero.', 'Sigue las actualizaciones de la misión y conserva los documentos hasta confirmar su entrega.'],
    guideUrl: guide('the-unheard')
  },
  {
    id: 'labyrinth',
    title: 'The Labyrinth',
    titleEs: 'El Laberinto',
    maps: ['Shoreline', 'The Labyrinth'],
    summary: 'Follow the Shoreline entry point into the Labyrinth storyline before committing to its later objectives.',
    summaryEs: 'Sigue el punto de entrada de Shoreline a la cadena del Laberinto antes de comprometerte con sus objetivos posteriores.',
    stepsEs: ['Llega a la entrada del Laberinto desde Shoreline para activar la cadena.', 'Prepara equipo, curación y una extracción segura antes de entrar.', 'Usa la guía externa para los objetivos internos: la información de esta ruta cambia con frecuencia.'],
    guideUrl: 'https://tarkov.help/en/trader/storyteller/quests'
  },
  {
    id: 'ticket',
    title: 'The Ticket',
    titleEs: 'El billete',
    maps: ['The Lab', 'Streets of Tarkov', 'Lighthouse', 'Terminal'],
    summary: 'The main ending route. Review the consequences before choosing Prapor, Kerman or Lightkeeper paths.',
    summaryEs: 'Ruta principal de finales. Revisa consecuencias antes de elegir los caminos de Prapor, Kerman o Lightkeeper.',
    stepsEs: ['Construye Recon Center nivel 1 y retoma la cadena tras la elección de Falling Skies.', 'Abre la pestaña Decisiones y finales y compara los costes, accesos y logros de cada rama.', 'No confirmes una entrega, conversación o prueba final sin revisar las consecuencias de la ruta elegida.'],
    guideUrl: guide('the-ticket'),
    decision: true
  },
  {
    id: 'boreas',
    title: 'Boreas',
    titleEs: 'Boreas',
    maps: ['Icebreaker'],
    summary: 'Late-game Icebreaker route: prepare the access requirements, extraction funds and the required recovered items.',
    summaryEs: 'Ruta tardía de Icebreaker: prepara requisitos de acceso, fondos de extracción y los objetos que deben extraerse.',
    stepsEs: ['Activa la ruta con Inteligencia nivel 3 o el póster Paradigm Shipping y sigue la conversación con Mechanic.', 'Prepara el acceso a Icebreaker, 400.000 rublos de entrada y 2.500 euros para la extracción según la guía.', 'Extrae 4 Memento, 2 Gigachad y 3 Ultralink; la relación con Prapor y BTR Driver puede alterar la ruta.'],
    guideUrl: guide('boreas')
  }
];

// Operational notes are intentionally concise and rewritten. The linked source
// remains the authority for exact coordinates and any patch-sensitive changes.
export const storyChapterIntel = {
  release: {
    fullStepsEs: ['Completa el objetivo de introducción en Ground Zero para que se active el tablero narrativo.', 'Consulta el diario y habla con el contacto que aparezca: el capítulo inicial no se resuelve con una única entrega.', 'Elige una ruta que ya tengas desbloqueada —Tour, Falling Skies, They Are Already Here, Batya, Accidental Witness, Blue Fire o The Unheard— y conserva los objetos de misión que recuperes.', 'Vuelve al panel de Modo Historia después de cada extracción para comprobar qué capítulo se ha habilitado y cuáles son las decisiones pendientes.', 'No confundas Storyteller con un comerciante: es la agrupación que utiliza Tarkov Help para estas rutas de historia.'],
    checklistEs: ['Termina el objetivo de apertura antes de perseguir ramas secundarias.', 'Elige una ruta por mapa según las localizaciones ya desbloqueadas.', 'Guarda los objetos de misión hasta confirmar su entrega.'],
    notesEs: ['Este capítulo es un punto de distribución: no existe un orden único entre todas sus rutas.']
  },
  tour: {
    screenshots: ['https://minio.tarkov.help/production/img/articles/phpjWwiyj.png', 'https://minio.tarkov.help/production/img/articles/php9Uc1v0.png', 'https://minio.tarkov.help/production/img/articles/phpDqM3vF.png'],
    fullStepsEs: ['Registra el tutorial de Ground Zero/Epicenter: mesas, cajas y cadáveres contienen el equipo inicial.', 'Antes del vestíbulo, revisa el lado derecho de los cadáveres para recoger el LEDX del tutorial.', 'Elimina a los Scavs del corredor, saquea lo necesario y extrae por el final de la valla.', 'Habla con Therapist y paga 250.000 rublos para desbloquear Streets.', 'Con Ragman, sobrevive Interchange; su siguiente conversación habilita a Skier.', 'Entrega a Skier cinco materiales de construcción y extrae de Customs cuando la cadena lo pida.', 'Habla con Mechanic, sobrevive Factory y entrega las armas de Scav solicitadas para abrir Woods.', 'En Woods, elimina tres objetivos y sobrevive. Después, en Shoreline, aproxima el puerto y usa la consola bajo la torre cercana al autobús.', 'Si tienes una keycard de Labs, revisa oficinas de dirección, sala de servidores y el drenaje; no hables con otros comerciantes después de recibir esa submisión.', 'Completa los pagos y desbloqueos restantes de Reserve y Lighthouse que marque el diario.'],
    checklistEs: ['Lleva una mochila para el tutorial de Ground Zero y extrae siempre que el objetivo lo pida.', 'Reserva 250.000 rublos para Therapist y 20.000 dólares para Mechanic cuando la cadena los solicite.', 'Conserva una keycard de Labs si aparece: puede abrir una rama de investigación adicional.'],
    notesEs: ['Las conversaciones con comerciantes actualizan objetivos. Revisa el diario antes de entrar a la siguiente raid.']
  },
  'falling-skies': {
    screenshots: ['https://minio.tarkov.help/production/img/articles/php3NKopk.png', 'https://minio.tarkov.help/production/img/articles/phpT6Xksh.jpg', 'https://minio.tarkov.help/production/img/articles/phprrGAF6.jpg'],
    fullStepsEs: ['Activa la ruta tras la extracción de Factory de Mechanic o al acercarte al avión de Woods.', 'Visita el avión, confirma el objetivo y extrae; después habla con Therapist.', 'Entrega 2.000 dólares y recupera el pendrive de Shoreline cerca de Tunnel. Entrégalo a Prapor y espera la actualización.', 'Vuelve al avión de Woods por la Black Box, extrae y llévala a Shoreline.', 'Cruza a la isla de pescadores junto al túnel destruido y coloca la caja en la habitación más alejada.', 'Entrega 3 baterías recargables, 5 PCB y 2 Toolsets a Prapor; espera la siguiente fase.', 'Registra la casa del presidente en Shoreline y extrae con el diario y los soportes de datos.', 'Recupera el Armored Case de la cabina del piloto en el avión de Woods.', 'Antes de decidir, compara las rutas: devolverlo a Prapor o conservarlo concede logros distintos y altera el coste de finales posteriores.', 'Construye Recon Center nivel 1 para seguir con The Ticket.'],
    checklistEs: ['Lleva espacio seguro para la información recuperada en Woods y Shoreline.', 'Prepara 3 baterías recargables, 5 PCB y 2 Toolsets antes de la entrega a Prapor.', 'Abre Decisiones y finales antes de tocar el Armored Case.'],
    notesEs: ['La elección del Armored Case no bloquea toda la historia, pero cambia el coste y la dificultad de ciertos finales.']
  },
  'they-are-already-here': {
    screenshots: ['https://minio.tarkov.help/production/img/articles/phpwlvJzr.png', 'https://minio.tarkov.help/production/img/articles/phpGa5JFm.png', 'https://minio.tarkov.help/production/img/articles/phpHXCu8Q.png'],
    fullStepsEs: ['Activa la misión entrando en una habitación marcada, leyendo una nota de cultistas o eliminando un cultista.', 'En Lighthouse, registra la casa de la aldea inundada, extrae con la llave y cinta y escucha la cinta en el escondite.', 'Usa la llave en el apartamento de Streets; fuerza la puerta blanca, recupera la segunda cinta, nota y libro y léelos.', 'Habla con Mechanic y elimina un cultista en horario nocturno.', 'Estudia otra nota de habitación marcada; busca el Eye of the World en el chalet de Lighthouse y recoge el pase D14 del quad.', 'En Shoreline, lleva Toolset a la caseta de la torre, lee la nota del cadáver y repara el equipo.', 'Haz Woods de día y recupera la nota de la casa de la aldea inundada; las notas de Kerman y esta ruta pueden requerir raids distintas.', 'Habla con Mechanic, fabrica el pase 14-4 KORD y llévalo con el pendrive seguro a Interchange.', 'Activa alimentación, servidor y refrigeración, planta el pendrive y escucha la cinta de la caja fuerte durante la raid.', 'Extrae y vuelve a entrar si sigues la rama secreta; recupera el pendrive y entrégalo a Mechanic.'],
    checklistEs: ['Lleva la llave de una habitación marcada si buscas iniciar la ruta de forma directa.', 'Desbloquea Lighthouse mediante Tour antes de ir a la aldea inundada.', 'Extrae con la llave y la cinta; escucha la cinta desde el escondite.'],
    notesEs: ['La activación también puede ocurrir al encontrar una nota marcada o eliminar un cultista.']
  },
  batya: {
    screenshots: ['https://minio.tarkov.help/production/img/articles/phpUclYK4.png', 'https://minio.tarkov.help/production/img/articles/phpHZcDBf.png', 'https://minio.tarkov.help/production/img/articles/phplZDeMV.png'],
    fullStepsEs: ['Activa la ruta junto al AGS de la construcción nueva de Customs y recoge el parche Bogatyr de la estructura temporal.', 'En Woods registra Ryabina y recoge el informe y el amuleto de Streltsov.', 'En Interchange, explora Nest: recoge notas, registros, mapas y cinta; después explora Carousel para los objetos de Taran, Streltsov y Voevoda.', 'En Woods, registra la tumba cercana a la estación abandonada para obtener el código, teléfono y token de Moreman.', 'Escucha las cintas habilitadas y construye Inteligencia nivel 3.', 'En la radio de Inteligencia sintoniza 35.70 / 27.893.2000 antes de visitar Lightkeeper.', 'Obtén acceso a Lightkeeper y entrega amuleto, grabadora, token, postal y parche.', 'Tras la espera, supera las pruebas de Voevoda: cuatro PMCs sin morir y después quince objetivos sin morir.', 'Sigue las notas del campamento BEAR de Lighthouse y de los círculos de cultistas de Shoreline y Woods.', 'Regresa a Lightkeeper y lee el informe de la caja exterior para cerrar la ruta.'],
    checklistEs: ['Ten Inteligencia nivel 3 antes de planear el tramo final.', 'No entregues marcas, token, amuleto o grabadora hasta que la misión pida la entrega.', 'Comprueba que sigues teniendo acceso a Lightkeeper.'],
    notesEs: ['Es una cadena larga de investigación y entrega; planifica varias raids y no asumas que todos los objetos aparecen en una sola ruta.']
  },
  'accidental-witness': {
    screenshots: ['https://minio.tarkov.help/production/img/articles/phpRaW1eQ.png', 'https://minio.tarkov.help/production/img/articles/phppsMyxc.png', 'https://minio.tarkov.help/production/img/articles/php4wPKlQ.png'],
    fullStepsEs: ['Inicia al encontrar el coche blanco de Kozlov en Customs.', 'En el dormitorio de dos plantas, lee la nota de la habitación 110, abre y recoge la carta de la mesilla; extrae y habla con Skier.', 'En Streets, abre el apartamento de Zmeyeskaya 3 con su llave y recoge el informe FSB y el periódico.', 'Tras hablar con Skier y Fence, fuerza la puerta 7 de Chekannaya 13 y recoge carta y periódico del buzón.', 'En Customs, registra el ataque de Pasha, extrae con el sobre y actualiza con Skier.', 'Elimina a Reshala hasta obtener su llave y registra su base temporal y documentos.', 'En el pueblo nuevo de Shoreline, recoge la cinta del huerto y entra en la casa junto a ella para confirmar la prueba.', 'Completa la entrega final para obtener el logro Pay Back Your Debt.'],
    checklistEs: ['Consigue acceso a los dormitorios de Customs, incluida la habitación 110.', 'Planifica una ruta de extracción después de cada hallazgo documental.', 'Consulta el diario al hablar con Skier y Ragman: los siguientes objetivos cambian de mapa.'],
    notesEs: ['La ruta comienza al acercarte al coche blanco de Kozlov en Customs.']
  },
  'blue-fire': {
    screenshots: ['https://minio.tarkov.help/production/img/articles/phpK2Ia3y.png', 'https://minio.tarkov.help/production/img/articles/phpJUcfwb.jpg', 'https://minio.tarkov.help/production/img/articles/php45pMXF.jpg'],
    fullStepsEs: ['En Woods, registra los contenedores del campamento EMERCOM: el folleto está sobre el vehículo UNTAR o en el mobiliario médico.', 'Habla con Mechanic tras extraer el folleto.', 'Busca el dispositivo desconocido en Streets: puede estar en Chekannaya 13 con la Mysterious room marked key o en el ala cerrada de LEXOS con su llave.', 'Entrega el dispositivo a Mechanic y planta el pendrive que entrega en la sala de servidores de Labs.', 'Al hablar con Mechanic, decide si conservar el dispositivo o vendérselo; ambas opciones avanzan, pero la primera concede el logro All for Myself.', 'En Labs, registra las oficinas del segundo piso sobre la transición a Streets y lee el documento que encuentres.', 'En Streets, sigue la rama Post of Rus: recupera las tres cintas de la sucursal.', 'Busca la llave y el vehículo azul de Post of Rus en la carretera, inspecciona los planos del interior y completa la cadena para el logro Burn!.'],
    checklistEs: ['Revisa el campamento EMERCOM de Woods y los contenedores del área médica.', 'Habla con Mechanic después de recuperar el folleto.', 'Prepara acceso a Epicenter o Streets y la llave de habitación marcada si la investigación te la requiere.'],
    notesEs: ['La nota inicial puede aparecer en el mobiliario de los contenedores; no abandones la zona sin comprobar ambos puntos.']
  },
  unheard: {
    screenshots: ['https://minio.tarkov.help/production/img/articles/phprbEAtH.png', 'https://minio.tarkov.help/production/img/articles/php2tXvTw.jpg', 'https://minio.tarkov.help/production/img/articles/phpEKntRh.jpg'],
    fullStepsEs: ['Inicia en la oficina de seguridad de TerraGroup de Cardinal, bloque B de Streets, o con la nota de la oficina de Ground Zero.', 'En Labs, con keycard, recoge y lee los dos documentos próximos a la oficina O23 y la cúpula naranja.', 'En Factory, recupera el registro de transporte junto a barriles amarillos y depósitos azules.', 'En Streets, encuentra el HDD cifrado del coche de Rzhevsky cerca de LEXOS y espera su descifrado en el escondite.', 'Consigue la keycard del almacén TerraGroup de Factory, registra toda la sala y recoge los documentos de Blue Ice.', 'En Labs, recoge las dos cintas de la sala de conferencias y escúchalas dentro de la raid en el orden indicado antes de pasar a la siguiente.', 'Visita el panel de notas de la oficina Molecule junto al control del parking; después ve a Shoreline, ala este 305, por el pendrive, nota y llave corporativa.', 'Descifra el pendrive, habla con Mechanic y prepara la Green keycard reescrita.', 'En Streets, abre el apartamento corporativo de TerraGroup y estudia los cuatro documentos para cerrar la cadena.'],
    checklistEs: ['En Streets, entra en Cardinal bloque B y registra la oficina de seguridad de TerraGroup.', 'Como alternativa, revisa la oficina de TerraGroup de Ground Zero.', 'Extrae con la nota y sigue las actualizaciones antes de consumir objetos de misión.'],
    notesEs: ['La oficina de Streets figura como punto de inicio principal de esta cadena.']
  },
  labyrinth: {
    checklistEs: ['Comprueba el acceso desde Shoreline antes de preparar una incursión al Laberinto.', 'Entra con curación, munición y una estrategia de extracción, no solo con equipo de exploración.', 'Revisa la guía fuente el mismo día: esta ruta cambia con frecuencia.'],
    notesEs: ['La información pública disponible para los tramos internos es menos estable que en otras rutas.']
  },
  ticket: {
    screenshots: ['https://minio.tarkov.help/production/img/articles/phpE8rYBp.png', 'https://minio.tarkov.help/production/img/articles/phpgnAqzG.png'],
    fullStepsEs: ['Construye Recon Center nivel 1: Kerman contactará a través del ordenador del escondite.', 'La elección del Armored Case solo modifica dificultad/coste: no impide obtener los cuatro finales.', 'Para Savior, coopera siempre con Kerman, completa todas las cadenas narrativas y reúne todas las pruebas contra TerraGroup.', 'Para Survivor, rechaza a Kerman tras abrir el caso y cumple la ruta de Prapor; el coste depende de si entregaste el Case en Falling Skies.', 'Para Debtor, sigue a Kerman pero rechaza la recopilación completa de pruebas; exige ruta de Lightkeeper.', 'Para Fallen, coopera con Kerman y rechaza las pruebas al final; Prapor abrirá tareas costosas y la entrega final de dinero.', 'Abre la rama concreta antes de aceptar decisiones: Kerman/Savior, Prapor/Fallen, Lightkeeper/Debtor o Prapor rápido/Survivor.'],
    checklistEs: ['Construye Recon Center nivel 1.', 'Revisa el resultado de Falling Skies antes de aceptar una rama.', 'Usa la pestaña Decisiones y finales para comparar Prapor, Kerman y Lightkeeper antes de entregar pruebas o dinero.'],
    notesEs: ['Los finales y sus requisitos dependen de elecciones previas; esta guía debe usarse junto al simulador de decisiones.'],
    branchesEs: [
      { title: 'Kerman · Savior', url: guide('the-ticket-kerman'), steps: ['En Falling Skies entrega el Case a Prapor y conserva la transcripción; si Kerman se enfada, espera su temporizador o sigue la nota del campamento sobre el Chalet de Lighthouse.', 'Desbloquea Lightkeeper: supera Network Provider - Part 1, completa Getting Acquainted y entrega tres Blue Folders cuando corresponda.', 'En Interchange, dispara una bengala amarilla frente a ULTRA y elimina 15 objetivos sin morir ni extraer; vuelve a Lightkeeper por el Case.', 'En Labs encuentra el Experimental Signal Suppressor y entrega el dispositivo a Mechanic para iniciar la apertura del Case en el Workbench.', 'Reserva espacio de inventario: el Case abierto contiene euros, keycard aleatoria, RFID de Kruglov y correo que debes leer.', 'Para el Master Pass, entra en la sala nueva de Kruglov en Labs con keycard normal y dos usos de keycard Black; extrae el pase y protégelo desde la interfaz de misión.', 'Obtén una Clean RFID card de habitaciones marcadas o supera la alternativa de tres raids de Labs consecutivas de diez minutos si falla esa búsqueda.', 'Entrega 40 Physical Bitcoin a Mechanic, usa la llave Elektronik en Streets y recupera el dispositivo de cifrado bajo la mesa.', 'Activa la keycard en Shoreline tras el craft de Recon Center y reúne todas las pruebas mayores y menores de las cadenas narrativas.', 'Eleva Fence a 4+, termina la cadena del BTR Driver, construye Solar Power nivel 1 y fabrica la RFID final antes del acceso a Terminal con Alpha-1.'] },
      { title: 'Prapor · Fallen', url: guide('the-ticket-prapor'), steps: ['Conserva el Armored Case en Falling Skies y no abras la conversación de Lightkeeper hasta que Prapor lo indique.', 'Reúne el Experimental Signal Suppressor en Labs, entrégalo a Mechanic y abre el Case desde el Workbench.', 'Completa el acceso al Master Pass de Kruglov y consigue una Clean RFID; si no aparece, usa la alternativa de tres incursiones consecutivas de diez minutos en Labs.', 'Entrega 40 Physical Bitcoin, consigue el cifrador de Elektronik en Streets y completa el craft de Inteligencia antes de activar la fase de Shoreline.', 'Cuando Kerman solicite las pruebas contra TerraGroup, rechaza la entrega: esa decisión fija la ruta Fallen.', 'Para Prapor, prepara de una vez 50 componentes militares o electrónicos avanzados, un contenedor seguro Theta/Epsilon/Kappa y 40 repair kits.', 'Entra en Reserve con la llave RB-PKPTS, recupera el Case de alto riesgo y extrae; no lleves otros objetos de misión irreemplazables.', 'Entrega 1.000.000 USD, espera el temporizador de 48 horas y fabrica la tarjeta especial desde Solar Power cuando Prapor actualice el diario.', 'Usa la tarjeta y el acceso habilitado para llegar a Terminal y confirma el final Fallen.'] },
      { title: 'Lightkeeper · Debtor', url: guide('the-ticket-lightkeeper-stay-in-tarkov'), steps: ['Entrega el Case a Prapor, desbloquea Lightkeeper y mantén una reputación de Fence suficiente para acceder a su isla.', 'Sigue la apertura del Case: Blue Folders, prueba de la bengala amarilla, Signal Suppressor de Labs, Workbench y Master Pass/RFID.', 'Avanza con Kerman hasta que pida pruebas contra TerraGroup, pero detente antes de reunir o entregar el conjunto completo: rechazar esa condición fija Debtor.', 'Acepta la cadena de inteligencia de Lightkeeper y recupera sus datos en Factory, Woods, Lighthouse, Customs y Ground Zero.', 'Construye el data drive en Inteligencia y respeta el tiempo de fabricación antes de volver a hablar con Lightkeeper.', 'Completa los encargos de combate y entrega que pida la ruta, incluidos los dogtags PMC y los objetivos específicos de Woods cuando aparezcan en el diario.', 'Sigue las conversaciones de Lightkeeper hasta recibir el acceso de Terminal; el final Debtor mantiene al personaje en Tarkov por la deuda.'] },
      { title: 'Prapor · Survivor', url: guide('the-ticket-prapor-fast'), steps: ['Decide el coste antes de empezar: entregar el Case a Prapor y tener acceso a Lightkeeper permite pagar 300 millones; conservarlo evita ese acceso, pero eleva el pago a 500 millones.', 'Abre el Case siguiendo la secuencia de Mechanic y Labs; no inicies una rama de recopilación total de pruebas para Kerman.', 'Cuando Kerman ofrezca continuar, recházalo inmediatamente para fijar la vía rápida de Prapor.', 'Activa el intercomunicador de Shoreline con la tarjeta que solicita el diario y vuelve con Prapor.', 'Entrega a Prapor los 300M o 500M de rublos según tu variante y espera a que habilite la recuperación de informes.', 'En Labs, recupera los cuatro informes/carpetas de la ruta; una de las búsquedas puede requerir la sala asociada a una Red keycard.', 'Extrae con los cuatro informes, entrégalos y utiliza el acceso de Terminal para confirmar el final Survivor.'] }
    ]
  },
  boreas: {
    fullStepsEs: ['Inicia mediante Inteligencia nivel 3 y la radio, o al leer el póster Paradigm Shipping de Streets/Epicenter.', 'Habla con Mechanic, lleva un Toolset al búnker Scav del norte de Woods y repara la torre.', 'En Lighthouse, recupera el documento del Rail Yard, extrae y entrégaselo a Mechanic; después habla con Prapor.', 'Completa las tareas que Prapor y BTR Driver habiliten. La reputación previa con ambos puede cambiar el requisito exacto.', 'Prepara 400.000 rublos para el acceso a Icebreaker, 2.500 euros para la extracción y la bengala de la variante que te asigne el diario.', 'En la entrada, registra el cadáver y conserva la keycard; usa el intercomunicador y el panel negro para abrir el avance hacia ingeniería.', 'Llega al sector de ingeniería, revisa las pistas de Black Division y utiliza la ruta del helipuerto si necesitas una extracción segura.', 'Tras el combate o evento de jefe, entra por la puerta de historia y recoge los objetos de progreso; no gastes una SZ-1 o carga especial fuera del punto marcado.', 'Cuando la cadena lo pida, consigue la carga y la SZ-1 de Prapor, equipa máscara antigás y vuelve a la puerta de historia para atravesar el tramo contaminado.', 'Extrae 4 Memento, 2 Gigachad y 3 Ultralink. Verifica el contador antes de abandonar Icebreaker.', 'Entrega los objetos y sigue todas las conversaciones posteriores: la siguiente incursión y la ruta de salida solo aparecen tras actualizar el diario.'],
    checklistEs: ['Activa la ruta con Inteligencia 3 o con el póster Paradigm Shipping.', 'Lleva Toolset cuando Mechanic te envíe a Woods y reserva fondos de entrada/salida para Icebreaker.', 'Antes de extraer de Icebreaker, verifica que llevas 4 Memento, 2 Gigachad y 3 Ultralink.'],
    notesEs: ['La afinidad con Prapor y BTR Driver puede modificar exigencias. Icebreaker es una ruta avanzada: prepara curación, munición y un plan de salida.']
  }
};
