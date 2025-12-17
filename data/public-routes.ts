interface Route {
    name: string;
    url?: string;
    submenu?: Route[]
}

export const PublicRoutes: Route[] = [
	{ name: "ГЛАВНАЯ", url: '/' },
	{ name: "О PRILIPLO", url : '/about' },
	{ name: "БИЗНЕСУ", url : '/business' },
	{ name: "Автовладельцам", url: '/driver' },
	{		
		name: "АКЦИИ",
		url: '/actions',
		submenu: [
			{ name: "Авто" },
			{ name: "Здоровье" },
			{ name: "Красота" },
			{ name: "Обучение" },
			{ name: "Развлечения" },
			{ name: "Кафе и рестораны" },
			{ name: "Разное" },
		],
	},
	{ name: "автомобили" },
	{ name: "Условия участия" },
	{ name: "Условия участия" },
	{ name: "вОПРОС/ОТВЕТ" },
	{ name: "ДОКУМЕНТЫ" },
	{ name: "КОНТАКТЫ" },
];