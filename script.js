// Language Toggle Functionality
let currentLanguage = 'ar';

const translations = {
    ar: {
        title: 'Free Fire Bot - بوت فري فاير',
        navHome: 'الرئيسية',
        navFeatures: 'المميزات',
        navPricing: 'الأسعار',
        navRegional: 'أسعار محلية',
        navTestimonials: 'آراء العملاء',
        navFaq: 'الأسئلة الشائعة',
        navContact: 'التواصل',
        heroTitle: 'بوت فري فاير المتطور',
        heroSubtitle: 'احصل على أفضل بوت لعبة فري فاير مع جميع المميزات المتقدمة',
        buyNow: 'اشتري الآن',
        moreInfo: 'المزيد من المعلومات',
        featuresTitle: 'مميزات البوت',
        pricingTitle: 'خطط الأسعار',
        contactTitle: 'تواصل معنا',
        oneDay: 'يوم واحد',
        tenDays: '10 أيام',
        twentyDays: '20 يوم',
        oneMonth: 'شهر واحد',
        twoMonths: 'شهرين',
        threeMonths: '3 أشهر',
        allApis: 'جميع الـ APIs',
        premiumPlans: 'الخطط المميزة',
        apiPackage: 'حزمة APIs الكاملة',
        mostPopular: 'الأكثر شعبية',
        customBot: 'بوت باسمك + لوحة التحكم',
        contactTelegram: 'تواصل عبر تليجرام',
        developer1: 'المطور الأول',
        algeria: 'الجزائر 🇩🇿',
        morocco: 'المغرب 🇲🇦',
        allRights: 'جميع الحقوق محفوظة',
        perMonth: '/شهر',
        regionalPricing: 'أسعار خاصة للدول العربية',
        regionalDescription: 'أسعار مميزة للعملاء من الجزائر والمغرب',
        regionalNote: 'الأسعار المحلية تشمل جميع المميزات نفسها مع دعم فني باللغة العربية',
        fullMonth: 'شهر كامل'
    },
    en: {
        title: 'Free Fire Bot - Advanced Gaming Bot',
        navHome: 'Home',
        navFeatures: 'Features',
        navPricing: 'Pricing',
        navRegional: 'Local Prices',
        navTestimonials: 'Testimonials',
        navFaq: 'FAQ',
        navContact: 'Contact',
        heroTitle: 'Advanced Free Fire Bot',
        heroSubtitle: 'Get the best Free Fire game bot with all advanced features',
        buyNow: 'Buy Now',
        moreInfo: 'More Information',
        featuresTitle: 'Bot Features',
        pricingTitle: 'Pricing Plans',
        contactTitle: 'Contact Us',
        oneDay: '1 Day',
        tenDays: '10 Days',
        twentyDays: '20 Days',
        oneMonth: '1 Month',
        twoMonths: '2 Months',
        threeMonths: '3 Months',
        allApis: 'All APIs',
        premiumPlans: 'Premium Plans',
        apiPackage: 'Complete API Package',
        mostPopular: 'Most Popular',
        customBot: 'Custom Bot + Control Panel',
        contactTelegram: 'Contact via Telegram',
        developer1: 'Developer 1',
        algeria: 'Algeria 🇩🇿',
        morocco: 'Morocco 🇲🇦',
        allRights: 'All rights reserved',
        perMonth: '/month',
        regionalPricing: 'Special Prices for Arab Countries',
        regionalDescription: 'Special prices for customers from Algeria and Morocco',
        regionalNote: 'Local prices include all the same features with Arabic technical support',
        fullMonth: 'Full Month'
    }
};

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    updateLanguage();
}

function updateLanguage() {
    const html = document.documentElement;
    const langToggle = document.querySelector('.lang-toggle');
    
    if (currentLanguage === 'ar') {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        langToggle.textContent = 'EN';
    } else {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        langToggle.textContent = 'AR';
    }
    
    // Update text content based on language
    const t = translations[currentLanguage];
    
    document.title = t.title;
    
    // Update navigation
    document.querySelector('a[href="#home"]').textContent = t.navHome;
    document.querySelector('a[href="#features"]').textContent = t.navFeatures;
    document.querySelector('a[href="#pricing"]').textContent = t.navPricing;
    document.querySelector('a[href="#regional-pricing"]').textContent = t.navRegional;
    document.querySelector('a[href="#testimonials"]').textContent = t.navTestimonials;
    document.querySelector('a[href="#faq"]').textContent = t.navFaq;
    document.querySelector('a[href="#contact"]').textContent = t.navContact;
    
    // Update hero section
    document.querySelector('.hero-title .gradient-text').textContent = t.heroTitle;
    document.querySelector('.hero-subtitle').textContent = t.heroSubtitle;
    
    // Update buttons
    const buyButtons = document.querySelectorAll('.btn-primary');
    buyButtons.forEach(btn => {
        if (btn.textContent.includes('اشتري الآن') || btn.textContent.includes('Buy Now')) {
            btn.innerHTML = `<i class="fas fa-shopping-cart"></i> ${t.buyNow}`;
        }
    });
    
    const moreInfoBtn = document.querySelector('a[href="#features"].btn-secondary');
    if (moreInfoBtn) {
        moreInfoBtn.innerHTML = `<i class="fas fa-info-circle"></i> ${t.moreInfo}`;
    }
    
    // Update section titles
    document.querySelector('#features .section-title').textContent = t.featuresTitle;
    document.querySelector('#pricing .section-title').textContent = t.pricingTitle;
    document.querySelector('#regional-pricing .section-title').textContent = t.regionalPricing;
    document.querySelector('#contact .section-title').textContent = t.contactTitle;

    // Update regional section
    const regionalDesc = document.querySelector('#regional-pricing .section-description');
    if (regionalDesc) regionalDesc.textContent = t.regionalDescription;

    const regionalNote = document.querySelector('.regional-note p');
    if (regionalNote) {
        regionalNote.innerHTML = `<i class="fas fa-info-circle"></i> ${t.regionalNote}`;
    }
}

// Contact Developer Function
function contactDev(plan, region = 'default') {
    const messages = {
        ar: {
            '1day': 'مرحباً، أريد شراء بوت فري فاير ليوم واحد بسعر 1$',
            '10days': 'مرحباً، أريد شراء بوت فري فاير لـ 10 أيام بسعر 5$',
            '20days': 'مرحباً، أريد شراء بوت فري فاير لـ 20 يوم بسعر 8$',
            '1month': 'مرحباً، أريد شراء بوت فري فاير المخصص لشهر واحد بسعر 20$',
            '2months': 'مرحباً، أريد شراء بوت فري فاير المخصص لشهرين بسعر 30$',
            '3months': 'مرحباً، أريد شراء بوت فري فاير المخصص لـ 3 أشهر بسعر 40$',
            'apis': 'مرحباً، أريد شراء حزمة جميع الـ APIs بسعر 15$ شهرياً'
        },
        en: {
            '1day': 'Hello, I want to buy Free Fire bot for 1 day at $1',
            '10days': 'Hello, I want to buy Free Fire bot for 10 days at $5',
            '20days': 'Hello, I want to buy Free Fire bot for 20 days at $8',
            '1month': 'Hello, I want to buy custom Free Fire bot for 1 month at $20',
            '2months': 'Hello, I want to buy custom Free Fire bot for 2 months at $30',
            '3months': 'Hello, I want to buy custom Free Fire bot for 3 months at $40',
            'apis': 'Hello, I want to buy all APIs package at $15/month'
        }
    };

    // Determine which Telegram contact to use based on region
    let telegramUsername = 'CH9AYFAX1'; // Default

    if (region === 'algeria') {
        telegramUsername = 'Blidar24';
    } else if (region === 'morocco') {
        telegramUsername = 'dev_jniyen';
    }

    const message = encodeURIComponent(messages[currentLanguage][plan]);
    const telegramUrl = `https://t.me/${telegramUsername}?text=${message}`;
    window.open(telegramUrl, '_blank');
}

// Function to show region selection modal
function showRegionSelection(plan) {
    const modal = document.createElement('div');
    modal.className = 'region-modal';
    modal.innerHTML = `
        <div class="region-modal-content">
            <h3>${currentLanguage === 'ar' ? 'اختر منطقتك' : 'Choose Your Region'}</h3>
            <div class="region-buttons">
                <button onclick="contactDev('${plan}', 'algeria')" class="region-btn">
                    <i class="fas fa-map-marker-alt"></i>
                    ${currentLanguage === 'ar' ? 'الجزائر 🇩🇿' : 'Algeria 🇩🇿'}
                </button>
                <button onclick="contactDev('${plan}', 'morocco')" class="region-btn">
                    <i class="fas fa-map-marker-alt"></i>
                    ${currentLanguage === 'ar' ? 'المغرب 🇲🇦' : 'Morocco 🇲🇦'}
                </button>
                <button onclick="contactDev('${plan}', 'default')" class="region-btn">
                    <i class="fas fa-globe"></i>
                    ${currentLanguage === 'ar' ? 'دولي' : 'International'}
                </button>
            </div>
            <button onclick="closeRegionModal()" class="close-modal">
                ${currentLanguage === 'ar' ? 'إغلاق' : 'Close'}
            </button>
        </div>
    `;

    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
}

function closeRegionModal() {
    const modal = document.querySelector('.region-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

// Regional Contact Function
function contactRegional(plan, region, price) {
    const messages = {
        ar: {
            algeria: {
                '1day': `مرحباً، أريد شراء بوت فري فاير ليوم واحد بسعر ${price}`,
                '10days': `مرحباً، أريد شراء بوت فري فاير لـ 10 أيام بسعر ${price}`,
                '1month': `مرحباً، أريد شراء بوت فري فاير المخصص لشهر واحد بسعر ${price}`
            },
            morocco: {
                '1day': `مرحباً، أريد شراء بوت فري فاير ليوم واحد بسعر ${price}`,
                '10days': `مرحباً، أريد شراء بوت فري فاير لـ 10 أيام بسعر ${price}`,
                '1month': `مرحباً، أريد شراء بوت فري فاير المخصص لشهر واحد بسعر ${price}`
            }
        },
        en: {
            algeria: {
                '1day': `Hello, I want to buy Free Fire bot for 1 day at ${price}`,
                '10days': `Hello, I want to buy Free Fire bot for 10 days at ${price}`,
                '1month': `Hello, I want to buy custom Free Fire bot for 1 month at ${price}`
            },
            morocco: {
                '1day': `Hello, I want to buy Free Fire bot for 1 day at ${price}`,
                '10days': `Hello, I want to buy Free Fire bot for 10 days at ${price}`,
                '1month': `Hello, I want to buy custom Free Fire bot for 1 month at ${price}`
            }
        }
    };

    // Determine which Telegram contact to use
    let telegramUsername = region === 'algeria' ? 'Blidar24' : 'dev_jniyen';

    const message = encodeURIComponent(messages[currentLanguage][region][plan]);
    const telegramUrl = `https://t.me/${telegramUsername}?text=${message}`;
    window.open(telegramUrl, '_blank');
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Bootstrap handles mobile menu automatically, no custom code needed

// Scroll Animation
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .pricing-card, .contact-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// Add CSS for scroll animation
const style = document.createElement('style');
style.textContent = `
    .feature-card, .pricing-card, .contact-card {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.6s ease;
    }

    .feature-card.animate, .pricing-card.animate, .contact-card.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Shopping Cart Functionality
let cart = [];

function addToCart(planId, price, planName) {
    const item = {
        id: planId,
        name: planName,
        price: price,
        quantity: 1
    };

    // Check if item already exists
    const existingItem = cart.find(cartItem => cartItem.id === planId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(item);
    }

    updateCartUI();
    showCartNotification(planName);
}

function removeFromCart(planId) {
    cart = cart.filter(item => item.id !== planId);
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                <p class="text-muted">سلة التسوق فارغة</p>
            </div>
        `;
        checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item d-flex justify-content-between align-items-center p-3 border-bottom">
                <div>
                    <h6 class="mb-1">${item.name}</h6>
                    <small class="text-muted">الكمية: ${item.quantity}</small>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <span class="fw-bold">$${item.price * item.quantity}</span>
                    <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart('${item.id}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
        checkoutBtn.disabled = false;
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total}`;
}

function showCart() {
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    cartModal.show();
}

function showCartNotification(itemName) {
    // Create toast notification
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show position-fixed" style="top: 100px; right: 20px; z-index: 9999;">
            <i class="fas fa-check-circle me-2"></i>
            تم إضافة "${itemName}" إلى السلة
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
    document.body.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function proceedToCheckout() {
    if (cart.length === 0) return;

    const cartSummary = cart.map(item => `${item.name} (${item.quantity}x) - $${item.price * item.quantity}`).join('\n');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const message = `مرحباً، أريد شراء:\n\n${cartSummary}\n\nالمجموع: $${total}`;
    const telegramUrl = `https://t.me/CH9AYFAX1?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
}

// Live Chat Functionality
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.toggle('show');
}

function sendQuickMessage(message) {
    const telegramUrl = `https://t.me/CH9AYFAX1?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
}

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateLanguage();
    animateOnScroll();
    updateCartUI();

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Animate counters when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    });

    const statsSection = document.querySelector('.store-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
});

// Pricing Card Hover Effects
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('popular')) {
            this.style.transform = 'translateY(0) scale(1)';
        } else {
            this.style.transform = 'translateY(0) scale(1.05)';
        }
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add CSS for loading animation
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle);
