let slideIndex = 0;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.slider img');
    if (n >= slides.length) { 
        slideIndex = 0 
    }
    if (n < 0) { 
        slideIndex = slides.length - 1 
    }
    const offset = -slideIndex * 100; // Calculate offset for translating the slider
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex); // Show the first slide
});

document.addEventListener("DOMContentLoaded", function() {
    async function getUserCountryCode() {
        try {
            const response = await fetch('https://ipinfo.io?token=YOUR_ACCESS_TOKEN'); // Replace with your actual API endpoint and token
            const data = await response.json();
            const countryCodeMap = {
                'US': '+1',
                'GB': '+44',
                'IN': '+91',
                'AU': '+61',
                'JP': '+81'
                // Add more country codes as needed
            };
            return countryCodeMap[data.country] || '+1'; // Default to +1 if country code is not in the map
        } catch (error) {
            console.error('Error fetching country code:', error);
            return '+1'; // Default to +1 on error
        }
    }

    async function setCountryCode() {
        const userCountryCode = await getUserCountryCode();
        const countryCodeSelect = document.getElementById('country-code');
        
        for (let i = 0; i < countryCodeSelect.options.length; i++) {
            if (countryCodeSelect.options[i].value === userCountryCode) {
                countryCodeSelect.selectedIndex = i;
                break;
            }
        }
    }

    setCountryCode();
});