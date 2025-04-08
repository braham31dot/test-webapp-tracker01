// ads.js - AdSense integration (add your AdSense code here)
if (navigator.onLine) {
    // Add your AdSense code here
    // Example:
    // const adScript = document.createElement('script');
    // adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_AD_CLIENT';
    // adScript.async = true;
    // document.head.appendChild(adScript);
    // const adDiv = document.createElement('div');
    // adDiv.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-YOUR_AD_CLIENT" data-ad-slot="YOUR_AD_SLOT" data-ad-format="auto" data-full-width-responsive="true"></ins>';
    // document.body.appendChild(adDiv);
    // (adsbygoogle = window.adsbygoogle || []).push({});
} else {
    //Redirect to offline.html
    window.location.href = 'offline.html';
}