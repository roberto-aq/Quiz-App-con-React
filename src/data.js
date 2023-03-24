import Ciencia from './assets/ciencia.png';
import Deportes from './assets/deportes.png';
import Filosofia from './assets/filosofía.png';
import Geografia from './assets/geografía.png';
import Historia from './assets/historia.png';
import Literatura from './assets/literatura.png';
import Tecnologia from './assets/tecnología.png';

export const imgs = [
	Ciencia,
	Deportes,
	Filosofia,
	Geografia,
	Historia,
	Literatura,
	Tecnologia,
];

export const categories = {
	historia: 'Historia', 
	literatura: 'Literatura',
	deportes: 'Deportes',
	ciencia: 'Ciencia',
	filosofia: 'Filosofía',
	tecnologia: 'Tecnología',
	geografia: 'Geografía',
};

const {
	historia,
	tecnologia,
	literatura,
	deportes,
	ciencia,
	filosofia,
	geografia,
} = categories;

export const questions = [
	{
		id: 1,
		difficulty: 'Fácil',
		question: '¿Qué evento inició la Primera Guerra Mundial?',
		category: historia,
		correct_answer:
			'El asesinato del Archiduque Franz Ferdinand de Austria',
		incorrect_answers: [
			'El hundimiento del Titanic',
			'La invasión de Polonia por Alemania',
			'La Revolución Francesa',
		],
	},
	{
		id: 2,
		difficulty: 'Fácil',
		question: '¿Quién es el autor de "Cien años de soledad"?        ',
		category: literatura,
		correct_answer: 'Gabriel García Márquez',
		incorrect_answers: [
			'Julio Cortázar',
			'Mario Vargas Llosa',
			'Pablo Neruda',
		],
	},
	{
		id: 3,
		difficulty: 'Fácil',
		question: '¿En qué deporte se utiliza un disco?',
		category: deportes,
		correct_answer: 'Hockey sobre hielo',
		incorrect_answers: ['Fútbol', 'Baloncesto', 'Béisbol'],
	},
	{
		id: 4,
		difficulty: 'Medio',
		question:
			"¿Qué sustancia es conocida como la 'molécula de la vida'?",
		category: ciencia,
		correct_answer: 'El ADN',
		incorrect_answers: ['La glucosa', 'La insulina', 'La proteína'],
	},
	{
		id: 5,
		difficulty: 'Difícil',
		question:
			'¿Quién es considerado el padre de la filosofía occidental?',
		category: filosofia,
		correct_answer: 'Sócrates',
		incorrect_answers: ['Aristóteles', 'Platón', 'Nietzsche'],
	},
	{
		id: 6,
		difficulty: 'Medio',
		question: '¿En qué año fue fundada la compañía Apple?',
		category: tecnologia,
		correct_answer: '1976',
		incorrect_answers: ['1984', '1991', '1967'],
	},
	{
		id: 7,
		difficulty: 'Fácil',
		question: '¿Cuál es el río más largo del mundo?',
		category: geografia,
		correct_answer: 'El Río Amazonas',
		incorrect_answers: [
			'El Río Nilo',
			'El Río Yangtze',
			'El Río Misisipi',
		],
	},
	{
		id: 8,
		difficulty: 'Medio',
		question: '¿Cuál es el océano más grande del mundo?',
		category: geografia,
		correct_answer: 'El Océano Pacífico',
		incorrect_answers: [
			'El Océano Atlántico',
			'El Océano Índico',
			'El Océano Ártico',
		],
	},
	{
		id: 9,
		difficulty: 'Difícil',
		question: '¿Cuál es la obra más famosa de William Shakespeare?',
		category: literatura,
		correct_answer: 'Hamlet',
		incorrect_answers: ['Romeo y Julieta', 'Macbeth', 'El Rey Lear'],
	},
	{
		id: 10,
		difficulty: 'Medio',
		question: '¿Qué es lo que se mide con la escala de Richter?',
		category: ciencia,
		correct_answer: 'La magnitud de los terremotos',
		incorrect_answers: [
			'La velocidad del sonido',
			'La intensidad de los huracanes',
			'La temperatura en grados Fahrenheit',
		],
	},
	{
		id: 11,
		difficulty: 'Fácil',
		question: '¿Qué país ganó el primer Mundial de Fútbol?',
		category: deportes,
		correct_answer: 'Uruguay',
		incorrect_answers: ['Brasil', 'Argentina', 'Alemania'],
	},
	{
		id: 12,
		difficulty: 'Medio',
		question: '¿Qué es el efecto invernadero?',
		category: ciencia,
		correct_answer:
			'Un fenómeno atmosférico que retiene el calor en la Tierra',
		incorrect_answers: [
			'Un tipo de casa de vidrio para plantas',
			'Un proceso químico para conservar alimentos',
			'Un tipo de sistema de calefacción para edificios',
		],
	},
	{
		id: 13,
		difficulty: 'Medio',
		question:
			'¿En qué año se celebraron los primeros Juegos Olímpicos modernos?',
		category: deportes,
		correct_answer: '1896',
		incorrect_answers: ['1900', '1924', '1936'],
	},
	{
		id: 14,
		difficulty: 'Fácil',
		question: '¿Cuál es el planeta más grande del sistema solar?',
		category: ciencia,
		correct_answer: 'Júpiter',
		incorrect_answers: ['Saturno', 'Neptuno', 'Urano'],
	},
	{
		id: 15,
		difficulty: 'Fácil',
		question: "¿Quién escribió la obra 'Don Quijote de la Mancha'?",
		category: literatura,
		correct_answer: 'Miguel de Cervantes',
		incorrect_answers: [
			'Federico García Lorca',
			'Gabriel García Márquez',
			'Pablo Neruda',
		],
	},
	{
		id: 16,
		difficulty: 'Medio',
		question:
			'¿Cuál es el elemento químico más abundante en la Tierra?',
		category: ciencia,
		correct_answer: 'Oxígeno',
		incorrect_answers: ['Nitrógeno', 'Hierro', 'Silicio'],
	},
	{
		id: 17,
		difficulty: 'Medio',
		question: '¿Cuál es el país más poblado del mundo?',
		category: geografia,
		correct_answer: 'China',
		incorrect_answers: ['India', 'Estados Unidos', 'Brasil'],
	},
	{
		id: 18,
		difficulty: 'Medio',
		question:
			'¿Quién es considerado el padre de la filosofía occidental?',
		category: filosofia,
		correct_answer: 'Sócrates',
		incorrect_answers: ['Platón', 'Aristóteles', 'Descartes'],
	},
	{
		id: 19,
		difficulty: 'Difícil',
		question: '¿Qué científico propuso la teoría del Big Bang?',
		category: ciencia,
		correct_answer: 'Georges Lemaître',
		incorrect_answers: [
			'Albert Einstein',
			'Stephen Hawking',
			'Isaac Newton',
		],
	},
	{
		id: 20,
		difficulty: 'Fácil',
		question: '¿Quién es el autor de la novela "El viejo y el mar"?',
		category: literatura,
		correct_answer: 'Ernest Hemingway',
		incorrect_answers: [
			'William Shakespeare',
			'J.K. Rowling',
			'F. Scott Fitzgerald',
		],
	},
	{
		id: 21,
		difficulty: 'Fácil',
		question: '¿Cuál es el órgano más grande del cuerpo humano?',
		category: ciencia,
		correct_answer: 'La piel',
		incorrect_answers: ['El hígado', 'El corazón', 'Los pulmones'],
	},
	{
		id: 22,
		difficulty: 'Medio',
		question: '¿Quién es el creador del sistema operativo Linux?',
		category: tecnologia,
		correct_answer: 'Linus Torvalds',
		incorrect_answers: [
			'Steve Jobs',
			'Bill Gates',
			'Mark Zuckerberg',
		],
	},
	{
		id: 23,
		difficulty: 'Medio',
		question: '¿En qué año terminó la Segunda Guerra Mundial?',
		category: historia,
		correct_answer: '1945',
		incorrect_answers: ['1939', '1941', '1943'],
	},
	{
		id: 24,
		difficulty: 'Fácil',
		question: '¿Cuál es el planeta más cercano al Sol?',
		category: ciencia,
		correct_answer: 'Mercurio',
		incorrect_answers: ['Venus', 'Marte', 'Júpiter'],
	},
	{
		id: 25,
		difficulty: 'Medio',
		question:
			"¿Qué escritor es conocido por haber escrito 'Cien años de soledad'?",
		category: literatura,
		correct_answer: 'Gabriel García Márquez',
		incorrect_answers: [
			'Jorge Luis Borges',
			'Pablo Neruda',
			'Julio Cortázar',
		],
	},
	{
		id: 26,
		difficulty: 'Difícil',
		question:
			'¿Qué país es el más grande en términos de superficie terrestre?',
		category: geografia,
		correct_answer: 'Rusia',
		incorrect_answers: ['Estados Unidos', 'China', 'Australia'],
	},
	{
		id: 27,
		difficulty: 'Medio',
		question: '¿Cuál es la capital de Canadá?',
		category: geografia,
		correct_answer: 'Ottawa',
		incorrect_answers: ['Toronto', 'Montreal', 'Vancouver'],
	},
	{
		id: 28,
		difficulty: 'Fácil',
		question: '¿Qué elemento químico tiene el símbolo H?',
		category: ciencia,
		correct_answer: 'Hidrógeno',
		incorrect_answers: ['Helio', 'Hierro', 'Hormigón'],
	},
	{
		id: 29,
		difficulty: 'Medio',
		question:
			'¿Qué jugador de fútbol ha ganado más Balones de Oro en la historia?',
		category: deportes,
		correct_answer: 'Lionel Messi',
		incorrect_answers: [
			'Cristiano Ronaldo',
			'Johan Cruyff',
			'Diego Maradona',
		],
	},
	{
		id: 30,
		difficulty: 'Fácil',
		question: '¿En qué año ocurrió la Revolución Francesa?',
		category: historia,
		correct_answer: '1789',
		incorrect_answers: ['1848', '1917', '1492'],
	},
	// -------------------
	{
		id: 31,
		difficulty: 'Fácil',
		category: tecnologia,
		question: '¿Qué significa la sigla HTML?',
		correct_answer: 'HyperText Markup Language',
		incorrect_answers: [
			'Hyperlinks and Text Markup Language',
			'Home Tool Markup Language',
			'Hyperlinking Text Markup Language',
		],
	},
	{
		id: 32,
		difficulty: 'Fácil',
		category: tecnologia,
		question: '¿Cuál es el navegador web más utilizado en el mundo?',
		correct_answer: 'Google Chrome',
		incorrect_answers: ['Safari', 'Firefox', 'Internet Explorer'],
	},
	{
		id: 33,
		difficulty: 'Fácil',
		category: tecnologia,
		question:
			'¿Qué lenguaje de programación es más utilizado para el desarrollo web?',
		correct_answer: 'JavaScript',
		incorrect_answers: ['Python', 'Java', 'C++'],
	},
	{
		id: 34,
		difficulty: 'Medio',
		category: tecnologia,
		question: '¿Qué es un servidor web?',
		correct_answer:
			'Un programa que recibe y procesa solicitudes HTTP',
		incorrect_answers: [
			'Un programa que envía correos electrónicos',
			'Un programa que protege la privacidad de los usuarios en línea',
			'Un programa que realiza operaciones matemáticas complejas',
		],
	},
	{
		id: 35,
		difficulty: 'Medio',
		category: tecnologia,
		question: '¿Qué es un ataque de phishing?',
		correct_answer:
			'Un intento de obtener información confidencial a través de un correo electrónico falso',
		incorrect_answers: [
			'Un virus que daña los archivos del ordenador',
			'Un tipo de ataque DDoS',
			'Un intento de secuestrar el tráfico de internet',
		],
	},
	{
		id: 36,
		difficulty: 'Medio',
		category: tecnologia,
		question: '¿Qué es un archivo CSV?',
		correct_answer:
			'Un archivo de texto con valores separados por comas',
		incorrect_answers: [
			'Un archivo de audio comprimido',
			'Un archivo de imagen en formato vectorial',
			'Un archivo de vídeo de alta definición',
		],
	},
	{
		id: 37,
		difficulty: 'Difícil',
		category: tecnologia,
		question: '¿Qué es un algoritmo de cifrado asimétrico?',
		correct_answer:
			'Un método de cifrado que utiliza dos claves diferentes',
		incorrect_answers: [
			'Un método de cifrado que utiliza la misma clave para cifrar y descifrar',
			'Un método de cifrado que no utiliza claves',
			'Un método de cifrado que solo se utiliza en aplicaciones militares',
		],
	},
	{
		id: 38,
		difficulty: 'Difícil',
		category: tecnologia,
		question: '¿Qué es una red privada virtual (VPN)?',
		correct_answer:
			'Una conexión segura a una red privada a través de internet',
		incorrect_answers: [
			'Una red de computadoras en una organización',
			'Una red de computadoras conectadas a internet',
			'Una red de computadoras que solo utiliza tecnología inalámbrica',
		],
	},
	{
		id: 39,
		difficulty: 'Difícil',
		question: '¿En qué año se produjo la Guerra de los Cien Años?',
		category: historia,
		correct_answer: '1337',
		incorrect_answers: ['1066', '1415', '1642'],
	},
	{
		id: 40,
		difficulty: 'Fácil',
		question: '¿En qué año se produjo el ataque a Pearl Harbor?',
		category: historia,
		correct_answer: '1941',
		incorrect_answers: ['1939', '1942', '1945'],
	},
	{
		id: 41,
		difficulty: 'Medio',
		question: '¿Qué tratado dio fin a la Primera Guerra Mundial?',
		category: historia,
		correct_answer: 'Tratado de Versalles',
		incorrect_answers: [
			'Tratado de Tordesillas',
			'Tratado de Westfalia',
			'Tratado de Nankín',
		],
	},
	{
		id: 42,
		difficulty: 'Difícil',
		question:
			'¿Quién fue el último emperador de la Dinastía Qing en China?',
		category: historia,
		correct_answer: 'Puyi',
		incorrect_answers: ['Hongwu', 'Wuzong', 'Kangxi'],
	},
	{
		id: 43,
		difficulty: 'Fácil',
		question:
			'¿Cuál fue el nombre de la primera expedición de Cristóbal Colón?',
		category: historia,
		correct_answer: 'La Santa María',
		incorrect_answers: [
			'La Pinta',
			'La Niña',
			'La Santísima Trinidad',
		],
	},
	{
		id: 44,
		difficulty: 'Medio',
		question:
			'¿Cuál fue el primer país en enviar un objeto hecho por el hombre a la luna?',
		category: historia,
		correct_answer: 'Estados Unidos',
		incorrect_answers: ['Unión Soviética', 'China', 'Japón'],
	},
	{
		id: 45,
		difficulty: 'Difícil',
		question:
			'¿Cuál fue la primera ciudad en el mundo en tener una población de más de un millón de habitantes?',
		category: historia,
		correct_answer: 'Roma',
		incorrect_answers: ['Atenas', 'Babilonia', 'Nínive'],
	},
	{
		id: 46,
		difficulty: 'Fácil',
		question:
			'¿Quién fue el primer presidente de los Estados Unidos?',
		category: historia,
		correct_answer: 'George Washington',
		incorrect_answers: [
			'Thomas Jefferson',
			'Abraham Lincoln',
			'Franklin D. Roosevelt',
		],
	},
	{
		id: 47,
		difficulty: 'Medio',
		question: '¿Cuál fue la primera dinastía en gobernar en China?',
		category: historia,
		correct_answer: 'Xia',
		incorrect_answers: ['Han', 'Tang', 'Song'],
	},
	{
		id: 48,
		difficulty: 'Fácil',
		question: '¿Quién escribió la obra "Don Quijote de la Mancha"?',
		category: literatura,
		correct_answer: 'Miguel de Cervantes',
		incorrect_answers: [
			'Gabriel García Márquez',
			'Jorge Luis Borges',
			'Pablo Neruda',
		],
	},
	{
		id: 49,
		difficulty: 'Medio',
		question:
			'¿Cuál de las siguientes novelas es escrita por Gabriel García Márquez?',
		category: literatura,
		correct_answer: 'Cien años de soledad',
		incorrect_answers: [
			'Rayuela',
			'La ciudad y los perros',
			'La casa de los espíritus',
		],
	},
	{
		id: 50,
		difficulty: 'Difícil',
		question: '¿Quién escribió "La metamorfosis"?',
		category: literatura,
		correct_answer: 'Franz Kafka',
		incorrect_answers: [
			'Virginia Woolf',
			'James Joyce',
			'F. Scott Fitzgerald',
		],
	},
	{
		id: 51,
		difficulty: 'Fácil',
		question: '¿Quién escribió "El retrato de Dorian Gray"?',
		category: literatura,
		correct_answer: 'Oscar Wilde',
		incorrect_answers: [
			'Edgar Allan Poe',
			'Emily Bronte',
			'Charles Dickens',
		],
	},
	{
		id: 52,
		difficulty: 'Medio',
		question:
			'¿Cuál de las siguientes obras no fue escrita por William Shakespeare?',
		category: literatura,
		correct_answer: 'Moby Dick',
		incorrect_answers: ['Hamlet', 'Macbeth', 'Otelo'],
	},
	{
		id: 53,
		difficulty: 'Difícil',
		question:
			'¿Cuál de las siguientes obras de José Saramago recibió el Premio Nobel de Literatura?',
		category: literatura,
		correct_answer: 'Ensayo sobre la ceguera',
		incorrect_answers: [
			'La caverna',
			'El evangelio según Jesucristo',
			'Las intermitencias de la muerte',
		],
	},
	{
		id: 54,
		difficulty: 'Fácil',
		question:
			'¿Quién escribió la novela "El guardián entre el centeno"?',
		category: literatura,
		correct_answer: 'J.D. Salinger',
		incorrect_answers: [
			'F. Scott Fitzgerald',
			'Ernest Hemingway',
			'Tennessee Williams',
		],
	},
	{
		id: 55,
		difficulty: 'Difícil',
		question: '¿Cuál es el país más grande de África?',
		category: geografia,
		correct_answer: 'Argelia',
		incorrect_answers: [
			'Sudán',
			'Libia',
			'República Democrática del Congo',
		],
	},
	{
		id: 56,
		difficulty: 'Fácil',
		question: '¿Cuál es el país más grande del mundo?',
		category: geografia,
		correct_answer: 'Rusia',
		incorrect_answers: ['China', 'Estados Unidos', 'Canadá'],
	},
	{
		id: 57,
		difficulty: 'Medio',
		question: '¿En qué continente se encuentra el lago Baikal?',
		category: geografia,
		correct_answer: 'Asia',
		incorrect_answers: ['Europa', 'África', 'América del Sur'],
	},
	{
		id: 58,
		difficulty: 'Medio',
		question: '¿Cuál es el país más poblado del mundo?',
		category: geografia,
		correct_answer: 'China',
		incorrect_answers: ['India', 'Estados Unidos', 'Indonesia'],
	},
	{
		id: 59,
		difficulty: 'Difícil',
		question: '¿Cuál es la montaña más alta del mundo?',
		category: geografia,
		correct_answer: 'El Monte Everest',
		incorrect_answers: ['El K2', 'El Mont Blanc', 'El Aconcagua'],
	},
	{
		id: 60,
		difficulty: 'Difícil',
		question: '¿Cuál es el país más pequeño del mundo?',
		category: geografia,
		correct_answer: 'El Vaticano',
		incorrect_answers: ['Mónaco', 'Nauru', 'Tuvalu'],
	},
	{
		id: 61,
		difficulty: 'Medio',
		question: '¿Cuál es el país más extenso de África?',
		category: geografia,
		correct_answer: 'Argelia',
		incorrect_answers: ['Nigeria', 'Egipto', 'Sudáfrica'],
	},
	{
		id: 62,
		difficulty: 'Fácil',
		question: '¿Qué país ganó la Copa Mundial de la FIFA en 2018?',
		category: deportes,
		correct_answer: 'Francia',
		incorrect_answers: ['Alemania', 'Brasil', 'Argentina'],
	},
	{
		id: 63,
		difficulty: 'Fácil',
		question: '¿Qué deporte se juega en Wimbledon?',
		category: deportes,
		correct_answer: 'Tenis',
		incorrect_answers: ['Golf', 'Fútbol', 'Rugby'],
	},
	{
		id: 64,
		difficulty: 'Medio',
		question:
			'¿Cuántos puntos vale un touchdown en el fútbol americano?',
		category: deportes,
		correct_answer: '6',
		incorrect_answers: ['4', '7', '5'],
	},
	{
		id: 65,
		difficulty: 'Medio',
		question:
			'¿Cuál es el jugador de baloncesto con más anillos de campeonato en la NBA?',
		category: deportes,
		correct_answer: 'Bill Russell',
		incorrect_answers: [
			'Michael Jordan',
			'Kareem Abdul-Jabbar',
			'LeBron James',
		],
	},
	{
		id: 66,
		difficulty: 'Medio',
		question:
			'¿Cuál es el país de origen del futbolista Lionel Messi?',
		category: deportes,
		correct_answer: 'Argentina',
		incorrect_answers: ['Brasil', 'España', 'Portugal'],
	},
	{
		id: 67,
		difficulty: 'Difícil',
		question:
			'¿En qué año se celebraron los Juegos Olímpicos de Beijing?',
		category: deportes,
		correct_answer: '2008',
		incorrect_answers: ['2012', '2004', '2016'],
	},
	{
		id: 68,
		difficulty: 'Difícil',
		question:
			'¿Quién es el máximo goleador en la historia de la Liga Española?',
		category: deportes,
		correct_answer: 'Lionel Messi',
		incorrect_answers: [
			'Cristiano Ronaldo',
			'Telmo Zarra',
			'Hugo Sánchez',
		],
	},
	{
		id: 69,
		difficulty: 'Difícil',
		question: '¿En qué deporte se utiliza el término "smash"?',
		category: deportes,
		correct_answer: 'Bádminton',
		incorrect_answers: ['Voleibol', 'Tenis', 'Squash'],
	},
	{
		id: 70,
		category: filosofia,
		difficulty: 'Fácil',
		question: '¿Cuál es la obra más conocida de Platón?',
		correct_answer: 'La República',
		incorrect_answers: ['El Banquete', 'Timeo', 'Fedón'],
	},
	{
		id: 71,
		category: filosofia,
		difficulty: 'Medio',
		question:
			'¿Cuál es el concepto central de la filosofía de Descartes?',
		correct_answer: 'El cogito ergo sum',
		incorrect_answers: [
			'El empirismo',
			'El materialismo',
			'La fenomenología',
		],
	},
	{
		id: 72,
		category: filosofia,
		difficulty: 'Difícil',
		question: '¿Qué es la dialéctica en la filosofía de Hegel?',
		correct_answer:
			'El método para llegar a la verdad mediante la contradicción',
		incorrect_answers: [
			'La creación de un sistema filosófico',
			'La negación de la realidad',
			'El análisis de los procesos cognitivos',
		],
	},
	{
		id: 73,
		category: filosofia,
		difficulty: 'Medio',
		question: '¿Qué es el nihilismo en la filosofía?',
		correct_answer: 'La negación de todos los valores y creencias',
		incorrect_answers: [
			'La afirmación de la existencia de un ser superior',
			'La creencia en la reencarnación',
			'La negación de la existencia del mundo externo',
		],
	},
	{
		id: 74,
		category: filosofia,
		difficulty: 'Difícil',
		question:
			'¿Qué es la deconstrucción en la filosofía de Jacques Derrida?',
		correct_answer:
			'El análisis crítico de la relación entre los significados y los conceptos',
		incorrect_answers: [
			'La creación de nuevos conceptos a partir de la combinación de los antiguos',
			'La búsqueda de la verdad absoluta',
			'La negación de la existencia del lenguaje',
		],
	},
	{
		id: 75,
		category: filosofia,
		difficulty: 'Fácil',
		question: '¿Qué es la ética?',
		correct_answer:
			'La rama de la filosofía que estudia la moral y la conducta humana',
		incorrect_answers: [
			'La rama de la filosofía que estudia la lógica',
			'La rama de la filosofía que estudia la mente',
			'La rama de la filosofía que estudia el conocimiento',
		],
	},
	{
		id: 76,
		category: filosofia,
		difficulty: 'Medio',
		question:
			'¿Qué es el imperativo categórico en la filosofía de Kant?',
		correct_answer:
			'La regla moral que se debe seguir en cualquier situación',
		incorrect_answers: [
			'La creencia en la existencia de un Dios creador',
			'La negación de la libertad humana',
			'La afirmación de la existencia de una verdad absoluta',
		],
	},
	{
		id: 77,
		difficulty: 'Fácil',
		question: '¿Quién fue el autor de la obra "La República"?',
		category: filosofia,
		correct_answer: 'Platón',
		incorrect_answers: ['Aristóteles', 'Sócrates', 'Nietzsche'],
	},
	{
		id: 78,
		difficulty: 'Medio',
		question:
			'¿Cuál es el término filosófico para referirse al estudio del conocimiento?',
		category: filosofia,
		correct_answer: 'Epistemología',
		incorrect_answers: ['Ontología', 'Metafísica', 'Lógica'],
	},
	{
		id: 79,
		difficulty: 'Difícil',
		question:
			'¿Quién escribió el libro "El mundo como voluntad y representación"?',
		category: filosofia,
		correct_answer: 'Arthur Schopenhauer',
		incorrect_answers: [
			'Friedrich Nietzsche',
			'Immanuel Kant',
			'Jean-Paul Sartre',
		],
	},
	{
		id: 80,
		difficulty: 'Difícil',
		question: '¿Cuál es la partícula subatómica más pesada?',
		category: ciencia,
		correct_answer: 'Quark top',
		incorrect_answers: ['Electrón', 'Protón', 'Neutrón'],
	},
	{
		id: 81,
		category: ciencia,
		difficulty: 'Medio',
		question: '¿Qué es la capa de ozono?',
		correct_answer:
			'Una capa de gas que protege la Tierra de la radiación ultravioleta del sol',
		incorrect_answers: [
			'Una capa de nubes en la atmósfera',
			'La capa más externa de la Tierra',
			'Una capa de gases que produce el efecto invernadero',
		],
	},
	{
		id: 82,
		category: ciencia,
		difficulty: 'Difícil',
		question: '¿Qué es la antimateria?',
		correct_answer:
			'Una forma de materia que tiene propiedades opuestas a la materia ordinaria',
		incorrect_answers: [
			'Una forma de materia que no tiene carga eléctrica',
			'Una forma de materia que no tiene masa',
			'Una forma de energía que tiene la capacidad de desintegrar la materia',
		],
	},
	{
		id: 83,
		difficulty: 'Fácil',
		question: '¿Qué es el acrónimo "CPU" en inglés?',
		category: tecnologia,
		correct_answer: 'Central Processing Unit',
		incorrect_answers: [
			'Computer Personal Unit',
			'Central Personal Unit',
			'Computer Processing Unit',
		],
	},
	{
		id: 84,
		difficulty: 'Medio',
		question:
			'¿Cuál es el nombre de la primera computadora electrónica digital?',
		category: tecnologia,
		correct_answer: 'ENIAC',
		incorrect_answers: ['UNIVAC', 'COLOSSUS', 'EDSAC'],
	},
];
