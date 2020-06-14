 
$( document ).ready(function() {

    function getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
        if (/windows phone/i.test(userAgent)) {
            return "Windows Phone";
        }
    
        if (/android/i.test(userAgent)) {
            return "Android";
        }
     
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "iOS";
        }
    
        return "unknown";
    }

    var os = getMobileOperatingSystem();
var element = '';
if (os == 'Android') {
    element = ` <div id="mb-badge" class="MobileAppPopup">
    <div class="mb-badge d-block">
        <div class="mb-badge__wrap mb-badge__app">
            <div class="mb-badge__close"><img src="/images/close.png" alt="close"></div>
            <div class="mb-badge__content">
                <div class="mb-badge__icon"><img src="/images/logo.png" alt="«АЗС Газпромнефть Кыргызстан»"></div>
                <div class="mb-badge__text">
                    <p class="mb-badge__text-title">АЗС Газпромнефть Кыргызстан</p>
                    <p class="mb-badge__text-company">ОсОО "Газпром-нефть Азия"</p>
                    <img src="/images/app_rate.png" alt="Оценка">
                    <p class="mb-badge__textsubtitle-app">Бесплатно на - Google Play</p>
                </div>
                <div class="mb-badge__download"><a
                        href="https://play.google.com/store/apps/details?id=com.gpn.azs.kg&hl=ru"
                        class="mb-badge__download-link"><img src="/images/gplay.png" alt="close"></a></div>
            </div>
        </div>
    </div>
</div>`;
} else if (os == 'iOS') {
    element = ` <div id="mb-badge" class="MobileAppPopup">
    <div class="mb-badge d-block">
        <div class="mb-badge__wrap mb-badge__app">
            <div class="mb-badge__close"><img src="/images/close.png" alt="close"></div>
            <div class="mb-badge__content">
                <div class="mb-badge__icon"><img src="/images/logo.png" alt="«АЗС Газпромнефть Кыргызстан»"></div>
                <div class="mb-badge__text">
                    <p class="mb-badge__text-title">АЗС Газпромнефть Кыргызстан</p>
                    <p class="mb-badge__text-company">ОсОО "Газпром-нефть Азия"</p>
                    <img src="/images/app_rate.png" alt="Оценка">
                    <p class="mb-badge__textsubtitle-app">Бесплатно - на App Store</p>
                </div>
                <div class="mb-badge__download"><a
                        href="https://apps.apple.com/kg/app/%D0%B0%D0%B7%D1%81-%D0%B3%D0%B0%D0%B7%D0%BF%D1%80%D0%BE%D0%BC%D0%BD%D0%B5%D1%84%D1%82%D1%8C-%D0%BA%D1%8B%D1%80%D0%B3%D1%8B%D0%B7%D1%81%D1%82%D0%B0%D0%BD/id1508280597"
                        class="mb-badge__download-link"><img src="/images/appstore.png" alt="close"></a></div>
            </div>
        </div>
    </div>
</div>
    `;
}  

    $('body').prepend(element); 
});