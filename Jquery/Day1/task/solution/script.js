const aboutButton = $(".about-button");
const gallaryButton = $(".gallary-button");
const servicesButton = $(".services-button");
const complainButton = $(".complain-button");

const aboutSection = $(".about");
const gallarySection = $(".gallary");
const servicesSection = $(".services");
const complainSection = $(".complain");

const leftArrow = $('.gallary img:first-child');
const rightArrow = $('.gallary img:last-child');
const displayedImg = $('.gallary img:nth-child(2)');

const form = $(".complain form");

const formEditButton = $(".complain-message button");

aboutButton.click(function(){
    gallarySection.hide()
    servicesSection.hide()
    complainSection.hide()
    hideServices()
    aboutSection.toggle(300)
})

gallaryButton.click(function(){
    aboutSection.hide()
    servicesSection.hide()
    complainSection.hide()
    hideServices()
    gallarySection.toggle(300)
})

leftArrow.click(function(){
    var imgIndx = parseInt(displayedImg.attr('src').charAt(7));
    if (imgIndx != 1){
        imgIndx--;
        displayedImg.fadeOut(300, function(){
            displayedImg.attr('src', `images/${imgIndx}.jpg`);
            displayedImg.fadeIn(300);
        })
    }
})

rightArrow.click(function(){
    var imgIndx = parseInt(displayedImg.attr('src').charAt(7));
    if (imgIndx != 8){
        imgIndx++;
        displayedImg.fadeOut(300, function(){
            displayedImg.attr('src', `images/${imgIndx}.jpg`);
            displayedImg.fadeIn(300);
        })
    }
})

servicesButton.click(function(){
    aboutSection.hide()
    gallarySection.hide()
    complainSection.hide()
    servicesSection.toggle(300)
    $(".services div:eq(0)").slideDown(300, function(){
        $(".services div:eq(1)").slideDown(300, function(){
            $(".services div:eq(2)").slideDown(300)
        })
    })
})

complainButton.click(function(){
    aboutSection.hide()
    gallarySection.hide()
    servicesSection.hide()
    hideServices()
    complainSection.toggle(300)
})

form.submit(function(e){
    e.preventDefault();
    const name = 'Your name is ' + $("#name").val();
    const email = 'Your email is ' + $("#email").val();
    const phone = 'Your phone is ' + $("#phone").val();
    const message = 'Your complain is ' + $("textarea").val();

    form.toggle(300);
    $(".complain-message").show(300, function(){
        
        $("p:first").text(message);
        $("p:nth-child(2)").text(name);
        $('P:nth-child(3)').text(email);
        $("p:last").text(phone);
    })
})

formEditButton.click(function(){
    $(".complain-message").hide(300, function(){
        form.show(300);
    })
})

function hideServices(){
    $(".services div").slideUp(300);
}