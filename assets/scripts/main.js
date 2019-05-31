// SENDING DATA FROM FORM TO EMAIL
$(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

let progress = document.querySelector('.progress');
window.addEventListener('scroll',progressBar);
function progressBar(e){
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let per = windowScroll / windowHeight * 100;
    progress.style.width = per + '%';
}
let arrow = document.querySelector('i');
arrow.style.color = "rgba(1,1,1,0.6)";
arrow.classList.add('wow','animated','bounceIn','fast');
window.addEventListener('scroll',addArrow);
function  addArrow(e) {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (windowScroll > 230) arrow.style.display = "block";
    else if(windowScroll < 230) arrow.style.display = "none";
}
