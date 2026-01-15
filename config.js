// ========================================
// API Configuration
// ========================================
// Change this to your AWS backend URL after deployment

const CONFIG = {
    // Development (local)
    // API_URL: 'http://localhost:5000',

    // Production (AWS)
    API_URL: 'http://hotel-api-env.eba-3dhzikja.eu-north-1.elasticbeanstalk.com',

    // Token storage key
    TOKEN_KEY: 'hotel_auth_token',
    USER_KEY: 'hotel_current_user',
};

// Don't modify below this line
window.CONFIG = CONFIG;
