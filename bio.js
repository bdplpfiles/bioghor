<script>
//<![CDATA[
document.addEventListener("DOMContentLoaded", function() {
  var blockquotes = document.querySelectorAll("blockquote");
  blockquotes.forEach(function(blockquote) {
    var shareButtonsContainer = document.createElement("div");
    shareButtonsContainer.classList.add("at_share-buttons");
    var quote = blockquote.textContent.trim();
    var facebookShareButton = document.createElement("a");
    facebookShareButton.classList.add("facebook-share-button");
    facebookShareButton.innerHTML = '<i class="at-facebook"></i>';
    var whatsappShareButton = document.createElement("a");
    whatsappShareButton.classList.add("whatsapp-share-button");
    whatsappShareButton.innerHTML = '<i class="at-whatsapp"></i>';
    var twitterShareButton = document.createElement("a");
    twitterShareButton.classList.add("twitter-share-button");
    twitterShareButton.innerHTML = '<i class="at-twitter"></i>';
    var copyButton = document.createElement("a");
    copyButton.classList.add("copy-button");
    copyButton.textContent = "Copy";

    shareButtonsContainer.prepend(document.createTextNode("Share:"));
    shareButtonsContainer.append(facebookShareButton, whatsappShareButton, twitterShareButton, copyButton);
    blockquote.appendChild(shareButtonsContainer);

    facebookShareButton.addEventListener("click", function() {
      window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href) + "&quote=" + encodeURIComponent(encodeURIComponent(quote)) + "&hashtag=%23quotes", "facebook-share-dialog", "width=626,height=436");
      return false;
    });
    whatsappShareButton.addEventListener("click", function() {
      window.open("https://wa.me/?text=" + encodeURIComponent(quote), "_blank");
      return false;
    });
    twitterShareButton.addEventListener("click", function() {
      window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote) + "&hashtags=quotes", "twitter-share-dialog", "width=626,height=436");
      return false;
    });
    copyButton.addEventListener("click", function() {
      var copyTextarea = document.createElement("textarea");
      document.body.appendChild(copyTextarea);
      copyTextarea.value = quote;
      copyTextarea.select();
      document.execCommand("copy");
      copyTextarea.remove();
      this.textContent = "Copied";
      this.style.backgroundColor = "green";
      setTimeout((function() {
        this.textContent = "Copy";
        this.style.backgroundColor = "";
      }).bind(this), 1000);
    });
  });
});
//]]>
</script>


<style>
   .at_share-buttons{align-items:center;color:#444;display:flex;font-size:12px;justify-content:center;margin:8px 0 0;padding-bottom:8px;padding-top:7px;text-align:center;text-transform:uppercase}.at_share-buttons a{border-radius:15px;color:#fff;cursor:pointer;font-size:14px;line-height:1.4;margin:0 3px;max-height:31px;max-width:43px;padding:2px 10px;position:relative;text-decoration:none;transition:all .3s ease;word-break:normal}.at_share-buttons span{font-size:12px;font-style:normal;padding:4px 11px 0 0}.at_share-buttons a:hover{background-color:#2d4373}.facebook-share-button{background-color:#3b5998}.whatsapp-share-button{background-color:#25d366}.twitter-share-button{background-color:#1da1f2}.copy-button{background:linear-gradient(90deg,#fd1d1d 27%,#fcb045)!important;max-width:66px!important}.copy-button:active{background-color:green;color:#fff}.facebook-icon,.twitter-icon,.whatsapp-icon{fill:#fff;height:24px;margin-right:8px;width:24px}blockquote:after,blockquote:before{content:none}blockquote p{color:#000;font-size:16px;font-style:normal;font-weight:400;line-height:1.5;margin:auto;text-align:left;width:88%;word-spacing:2px}blockquote{background:#fffdfc;box-shadow:0 0 35px rgb(0 0 0/9%);padding:1.1rem;position:relative;text-align:center}.at_share-buttons i.at-twitter:after{background:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23Z' fill='%23fff'/%3E%3C/svg%3E") 50% /20px no-repeat;content:"";display:block;height:20px;width:20px}.at_share-buttons i.at-whatsapp:after{background:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01Z' fill='%23fff'/%3E%3C/svg%3E") 50% /20px no-repeat;content:"";display:block;height:20px;width:20px}.at_share-buttons i.at-facebook:after{background:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z' fill='%23fff'/%3E%3C/svg%3E") 50% /20px no-repeat;content:"";display:block;height:20px;width:20px}   
    </style>
