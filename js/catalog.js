document.addEventListener('alpine:init', () => {
    Alpine.data('catalogLogic', () => ({
        searchQuery: '',
        selectedCategory: 'all',
        
        // 4-те Стълба от Визитката на Цветкови
        items: [
            {
                id: 1,
                name: 'Обезмаслител Индустриален 5L',
                desc: 'Висококонцентриран обезмаслител за професионални кухни и ресторанти.',
                category: 'chemicals',
                categoryLabel: 'Препарати',
                inStock: true
            },
            {
                id: 2,
                name: 'Дезинфектант за Ръце и Повърхности 5L',
                desc: 'Медицински клас дезинфектант. Одобрен от МЗ. Идеален за лобита и казина.',
                category: 'disinfectants',
                categoryLabel: 'Дезинфектанти',
                inStock: true
            },
            {
                id: 3,
                name: 'Тоалетна Хартия Jumbo (12 ролки)',
                desc: 'Двупластова целулоза за диспенсъри с висок трафик.',
                category: 'paper',
                categoryLabel: 'Хартиени изделия',
                inStock: true
            },
            {
                id: 4,
                name: 'Таблетки за Миялна (Професионални)',
                desc: 'Консуматив за ресторантски съдомиялни машини. Бързо разтваряне.',
                category: 'consumables',
                categoryLabel: 'Консумативи',
                inStock: true
            },
            {
                id: 5,
                name: 'Кърпи за ръце Z-сгъване (Кашон 3000 бр.)',
                desc: 'Еднократни кърпи за ръце. Бяла целулоза.',
                category: 'paper',
                categoryLabel: 'Хартиени изделия',
                inStock: true
            },
            {
                id: 6,
                name: 'Препарат за под (Аромат Океан) 10L',
                desc: 'Дълготраен аромат. Не оставя следи по теракот и гранитогрес.',
                category: 'chemicals',
                categoryLabel: 'Препарати',
                inStock: false // Показва "По заявка"
            },
            {
                id: 7,
                name: 'Спрей Дезинфектант за Маси 750ml',
                desc: 'Готов за употреба дезинфектант за бързо почистване между клиенти.',
                category: 'disinfectants',
                categoryLabel: 'Дезинфектанти',
                inStock: true
            },
            {
                id: 8,
                name: 'Торби за смет 120L (Супер здрави)',
                desc: 'Индустриални чували за боклук, устойчиви на разкъсване.',
                category: 'consumables',
                categoryLabel: 'Консумативи',
                inStock: true
            }
        ],

        get filteredItems() {
            return this.items.filter(item => {
                const matchesSearch = item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                                      item.desc.toLowerCase().includes(this.searchQuery.toLowerCase());
                
                const matchesCategory = this.selectedCategory === 'all' || item.category === this.selectedCategory;

                return matchesSearch && matchesCategory;
            });
        }
    }));
});