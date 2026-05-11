const products = [
    {
        id: 1,
        brand: 'Jelist',
        model: '1500D',
        kw: 1.1,
        type: 'Open Type',
        price: '820,000 MMK',
        image:
            'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 2,
        brand: 'Jelist',
        model: '2500 (စတပ်ပါ)',
        kw: 2.0,
        type: 'Open Type',
        price: '1,220,000 MMK',
        image:
            'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 3,
        brand: 'Jelist',
        model: '2500 (စတပ်မပါ)',
        kw: 2.0,
        type: 'Open Type',
        price: '1,050,000 MMK',
        image:
            'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 4,
        brand: 'KEMAGE',
        model: 'KM2200io',
        kw: 2.2,
        type: 'Inverter',
        price: '850,000 MMK',
        image:
            'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 5,
        brand: 'Jelist',
        model: '3800 (စတပ်ပါ ဘီးပါ)',
        kw: 2.8,
        type: 'Open Type',
        price: '1,350,000 MMK',
        image:
            'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 6,
        brand: 'Jelist',
        model: '3800 (စတပ်ပါ)',
        kw: 2.8,
        type: 'Open Type',
        price: '1,250,000 MMK',
        image:
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 7,
        brand: 'Jelist',
        model: '3800 (ဘီးပါ လိပ်ပြာပုံ)',
        kw: 2.8,
        type: 'Open Type',
        price: '1,450,000 MMK',
        image:
            'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 8,
        brand: 'Roman',
        model: '3500E',
        kw: 3.0,
        type: 'Open Type',
        price: '1,570,000 MMK',
        image:
            'https://images.unsplash.com/photo-1497436072909-f5e4be8c8e4d?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 9,
        brand: 'Pro Lions',
        model: '3500EW',
        kw: 3.0,
        type: 'Open Type',
        price: '1,450,000 MMK',
        image:
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 10,
        brand: 'Worksite',
        model: '3500',
        kw: 3.5,
        type: 'Open Type',
        price: '1,300,000 MMK',
        image:
            'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 11,
        brand: 'Yamabisi',
        model: 'EC4800DXE',
        kw: 3.8,
        type: 'Open Type',
        price: '1,800,000 MMK',
        image:
            'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 12,
        brand: 'Yamma',
        model: 'YM5500iS',
        kw: 3.8,
        type: 'Inverter',
        price: '2,350,000 MMK',
        image:
            'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 13,
        brand: 'Robot',
        model: 'RB4000iSER',
        kw: 4.0,
        type: 'Inverter',
        price: '2,950,000 MMK',
        image:
            'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 14,
        brand: 'Max QMX',
        model: 'အင်ဂျင်လွတ်',
        kw: 4.8,
        type: 'Engine',
        price: '300,000 MMK',
        image:
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 15,
        brand: 'Jelist',
        model: '6500D',
        kw: 5.5,
        type: 'Open Type',
        price: '2,500,000 MMK',
        image:
            'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 16,
        brand: 'Shineray',
        model: 'SRGE7000E',
        kw: 5.5,
        type: 'Open Type',
        price: '2,800,000 MMK',
        image:
            'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 17,
        brand: 'Roman',
        model: '6500E',
        kw: 5.5,
        type: 'Open Type',
        price: '2,840,000 MMK',
        image:
            'https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 18,
        brand: 'Roman',
        model: 'RM8800iER',
        kw: 6.0,
        type: 'Inverter',
        price: '3,250,000 MMK',
        image:
            'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 19,
        brand: 'Jelist',
        model: '8000D',
        kw: 6.5,
        type: 'Open Type',
        price: '2,800,000 MMK',
        image:
            'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 20,
        brand: 'Yamma',
        model: 'YM8000E',
        kw: 6.5,
        type: 'Open Type',
        price: '2,900,000 MMK',
        image:
            'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 21,
        brand: 'Robot',
        model: 'RB7000iSER',
        kw: 6.5,
        type: 'Inverter',
        price: '3,500,000 MMK',
        image:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 22,
        brand: 'Yamabisi',
        model: 'EC8000DXE',
        kw: 7.0,
        type: 'Open Type',
        price: '3,300,000 MMK',
        image:
            'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 23,
        brand: 'Roman',
        model: '10000E',
        kw: 7.5,
        type: 'Open Type',
        price: '3,220,000 MMK',
        image:
            'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 24,
        brand: 'Yamabisi',
        model: 'EC9500DXE',
        kw: 7.5,
        type: 'Open Type',
        price: '3,400,000 MMK',
        image:
            'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 25,
        brand: 'Okyama',
        model: 'YM8000EN',
        kw: 8.0,
        type: 'Open Type',
        price: '2,490,000 MMK',
        image:
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    },

    {
        id: 26,
        brand: 'Roman',
        model: '12000E',
        kw: 8.5,
        type: 'Open Type',
        price: '3,570,000 MMK',
        image:
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
    },
]

export default products

