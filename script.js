// Данные для форматов мероприятий
const formats = [
    {
        title: "Вечеринка с друзьями",
        desc: "Неформальна встреча с кулинарным мастер классом от 4х до 15 ти человек",
        image: "formats/party.jpg",
        details: "Идеально для встречи с друзьями, которым надоели бары и рестораны. Вы вместе готовите ужин под руководством шефа, а потом наслаждаетесь результатом в уютной атмосфере. В стоимость входят продукты, работа шефа, аренда студии и уборка."
    },
    {
        title: "Свидание / ужин для двоих",
        desc: "Романтический кулинарный опыт для пары с индивидуальным шефом",
        image: "formats/date.PNG",
        details: "Уникальное свидание, где вы вместе приготовите ужин под руководством личного шефа. Мы создадим романтическую атмосферу, подготовим специальное меню и позаботимся о деталях. Идеально для предложения руки и сердца или годовщины."
    },
    {
        title: "Девичник / мальчишник",
        desc: "Тематическая вечеринка для девушек или молодых компаний",
        image: "formats/hangover.PNG",
        details: "Готовим вместе, поем караоке, играем в игры, смеёмся, общаемся в неформальной обстановке. Можно заказать тематическое меню, декорации и дополнительные развлечения."
    },
    {
        title: "День рождения взрослый",
        desc: "Празднование дня рождения с кулинарным мастер-классом для гостей",
        image: "formats/birthday.PNG",
        details: "Отметьте день рождения не в ресторане, а создавая праздничный ужин вместе с гостями. Мы поможем с меню, декором и развлечениями. В итоге получается живое, запоминающееся мероприятие, а не просто ужин."
    },
    {
        title: "Детский праздник",
        desc: "Весёлый и познавательный кулинарный мастер-класс для детей",
        image: "formats/birthday_jr.PNG",
        details: "Праздник, где дети не просто едят торт, а сами готовят пиццу, десерты или другие блюда. Безопасно, весело и познавательно. Включает аниматора-шефа, все ингредиенты, рецепты, фартуки и, конечно, праздничный декор."
    },
    {
        title: "Семейный вечер / мастер-класс",
        desc: "Совместное времяпрепровождение для родителей с детьми",
        image: "formats/family.PNG",
        details: "Разработаем мероприятие под ваш повод и формат. Предложим лучших ведущих, диджеем, анимационную команду, декор и все, что сделает ваш праздник незабываемым."
    },
    {
        title: "Корпоратив / тимбилдинг",
        desc: "Кулинарный тимбилдинг для укрепления командного духа",
        image: "formats/corporate.jpg",
        details: "Эффективный и вкусный тимбилдинг. Коллеги делятся на команды, готовят блюда на скорость или по сложности, а потом вместе ужинают. Развивает коммуникацию, распределение ролей и работу в команде."
    },
    {
        title: "Сборный кулинарный мастер-класс",
        desc: "Групповой кулинарный мастер класс. Проводим каждую неделю.",
        image: "formats/culinarny.PNG",
        details: "Тематические мастер-классы: паста ручной работы, суши, выпечка, авторские десерты, стейки и многое другое. Под руководством профессионального шефа вы освоите новые техники и рецепты, которые сможете повторить дома."
    },
    {
        title: "Аренда студии",
        desc: "Самостоятельное использование пространства для вашего мероприятия",
        image: "formats/slider/4.jpg",
        details: "Если у вас свой шеф, организатор или вы хотите провести мероприятие самостоятельно. Мы предоставляем полностью оборудованную кухню, зону отдыха, посуду и технику. Поможем с базовой подготовкой пространства."
    }
];

// Данные для FAQ
const faqItems = [
    {
        question: "Какие форматы вы проводите?",
        answer: "Мы проводим кулинарные мастер-классы, вечеринки, свидания, дни рождения (взрослые и детские), девичники/мальчишники, семейные вечера, корпоративы и тимбилдинги. Также доступна аренда студии для самостоятельных мероприятий."
    },
    {
        question: "Можно ли принести свой торт/напитки?",
        answer: "Да, вы можете принести свой торт, напитки и любые другие угощения. Мы предоставляем холодильник для хранения и всю необходимую посуду для сервировки."
    },
    {
        question: "Сколько человек помещается?",
        answer: "Наше пространство комфортно вмещает до 30 человек для мероприятий в формате фуршета и до 20 человек для мероприятий с посадкой за общим столом. Для детских праздников рекомендуем группы до 12 детей."
    },
    {
        question: "Есть ли возрастные ограничения?",
        answer: "Для большинства мероприятий ограничений по возрасту нет. Детские мастер-классы рассчитаны на детей от 5 лет. Дети младшего возраста могут участвовать в сопровождении родителей. Для некоторых сложных мастер-классов может быть рекомендация от 12 лет."
    },
    {
        question: "Что входит в стоимость?",
        answer: "В стоимость обычно входят: аренда пространства, работа шефа/аниматора, все продукты для приготовления, посуда и оборудование, базовый декор, уборка после мероприятия. Дополнительно можно заказать фотографа, тематический декор, специальное меню и другие услуги."
    },
    {
        question: "Как производится оплата?",
        answer: "Для бронирования даты требуется предоплата 30% от стоимости мероприятия. Оставшаяся сумма оплачивается в день мероприятия. Мы принимаем наличные, банковские карты и переводы на расчетный счет для юридических лиц."
    },
    {
        question: "Можно ли изменить дату?",
        answer: "Да, дату можно изменить при условии уведомления не менее чем за 72 часа до мероприятия. Перенос возможен на любую свободную дату в течение 3 месяцев с первоначально забронированной."
    }
];

// Данные для галереи - загружаем из папки formats/slider
const gallerySlides = [
    {
        image: "formats/slider/1.jpg",
        title: "Интерьер студии 1"
    },
    {
        image: "formats/slider/2.jpg",
        title: "Интерьер студии 2"
    },
    {
        image: "formats/slider/3.jpg",
        title: "Интерьер студии 3"
    },
    {
        image: "formats/slider/4.jpg",
        title: "Интерьер студии 4"
    }
];

// Функция для инициализации форматов мероприятий
function initFormats() {
    const formatsGrid = document.querySelector('.formats-grid');
    if (!formatsGrid) return;
    
    formats.forEach(format => {
        const card = document.createElement('div');
        card.className = 'format-card';
        card.innerHTML = `
            <div class="format-img" style="background-image: url('${format.image}')"></div>
            <div class="format-content">
                <h3 class="format-title">${format.title}</h3>
                <p class="format-desc">${format.desc}</p>
                <div class="format-actions">
                    <a href="#" class="btn btn-small format-details" data-title="${format.title}" data-details="${format.details}">Подробнее</a>
                    <a href="#booking" class="btn btn-small btn-outline">Запросить расчёт</a>
                </div>
            </div>
        `;
        formatsGrid.appendChild(card);
    });
}

// Функция для инициализации FAQ
function initFAQ() {
    const faqContainer = document.querySelector('.faq-container');
    if (!faqContainer) return;
    
    faqItems.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-question">
                <span>${item.question}</span>
                <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
                <p>${item.answer}</p>
            </div>
        `;
        faqContainer.appendChild(faqItem);
        
        // Добавляем обработчик клика на вопрос
        const question = faqItem.querySelector('.faq-question');
        const answer = faqItem.querySelector('.faq-answer');
        const toggle = faqItem.querySelector('.faq-toggle');
        
        question.addEventListener('click', function() {
            answer.classList.toggle('open');
            toggle.classList.toggle('open');
        });
    });
}

// Функция для инициализации галереи
function initGallery() {
    const sliderTrack = document.querySelector('.slider-track');
    const sliderNav = document.querySelector('.slider-nav');
    
    if (!sliderTrack || !sliderNav) return;
    
    // Очищаем контейнеры перед добавлением
    sliderTrack.innerHTML = '';
    sliderNav.innerHTML = '';
    
    gallerySlides.forEach((slide, index) => {
        // Слайд
        const slideDiv = document.createElement('div');
        slideDiv.className = 'slide';
        slideDiv.style.backgroundImage = `url('${slide.image}')`;
        slideDiv.setAttribute('data-index', index);
        sliderTrack.appendChild(slideDiv);
        
        // Точка навигации
        const dot = document.createElement('div');
        dot.className = 'slider-dot' + (index === 0 ? ' active' : '');
        dot.setAttribute('data-index', index);
        sliderNav.appendChild(dot);
        
        // Обработчик клика на точку
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            goToSlide(index);
        });
    });
    
    // Настройка слайдера
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    
    function goToSlide(index) {
        if (!sliderTrack) return;
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;
        
        sliderTrack.style.transform = `translateX(-${index * 100}%)`;
        
        // Обновляем активную точку
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) dots[index].classList.add('active');
        
        currentSlide = index;
    }

    if (slides.length > 0) {
        setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
    }

    window.goToSlide = goToSlide;
}


function initModals() {
    const formatModal = document.getElementById('formatModal');
    const modalClose = document.getElementById('modalClose');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const modalBooking = document.getElementById('modalBooking');
    
    if (!formatModal || !modalClose || !modalTitle || !modalContent || !modalBooking) return;

    document.querySelectorAll('.format-details').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const title = this.getAttribute('data-title');
            const details = this.getAttribute('data-details');
            
            modalTitle.textContent = title;
            modalContent.innerHTML = `<p>${details}</p>`;
            modalBooking.textContent = 'Запросить расчёт на "' + title + '"';
            
            formatModal.classList.add('active');
        });
    });
    

    modalClose.addEventListener('click', function() {
        formatModal.classList.remove('active');
    });
    

    formatModal.addEventListener('click', function(e) {
        if (e.target === this) {
            formatModal.classList.remove('active');
        }
    });
    
    // Обработчики для партнёрского модального окна
    const partnersLink = document.getElementById('partners-link');
    const partnersModal = document.getElementById('partnersModal');
    const partnersModalClose = document.getElementById('partnersModalClose');
    
    if (partnersLink && partnersModal && partnersModalClose) {
        partnersLink.addEventListener('click', function(e) {
            e.preventDefault();
            partnersModal.classList.add('active');
        });
        
        partnersModalClose.addEventListener('click', function() {
            partnersModal.classList.remove('active');
        });
        
        partnersModal.addEventListener('click', function(e) {
            if (e.target === this) {
                partnersModal.classList.remove('active');
            }
        });
    }
}

// Функция для инициализации формы бронирования
function initBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    if (!bookingForm) return;
    
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время для уточнения деталей.');
        bookingForm.reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Функция для инициализации плавной прокрутки
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Закрываем модальные окна если они открыты
                const formatModal = document.getElementById('formatModal');
                const partnersModal = document.getElementById('partnersModal');
                
                if (formatModal) formatModal.classList.remove('active');
                if (partnersModal) partnersModal.classList.remove('active');
                
                // Прокрутка к элементу
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Функция для обновления превью галереи
function updateGalleryPreview() {
    const galleryPreview = document.querySelector('.gallery-preview');
    if (galleryPreview) {
        // Обновляем пути к изображениям в превью
        const previewImages = galleryPreview.querySelectorAll('img');
        const previewPaths = [
            'formats/slider/2.jpg',
            'formats/slider/3.jpg', 
            'formats/slider/4.jpg'
        ];
        
        previewImages.forEach((img, index) => {
            if (index < previewPaths.length) {
                img.src = previewPaths[index];
            }
        });
    }
}

// Главная функция инициализации
function init() {
    initFormats();
    initFAQ();
    initGallery();
    initModals();
    initBookingForm();
    initSmoothScroll();
    updateGalleryPreview();
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', init);