$(document).ready(function () {
    var userData;
    function doValidate_frmReg() {
        var form = $("#createForm");
        form.validate({
            rules: {
                name: {
                    required: true,
                    
                },
                mNumber: {
                    required: true,
                    minlength: 10,
                },
                password: {
                    required: true,
                    minlength:6
                },
                lName: {
                    required: true,
                },
                lNumber: {
                    required: true,
                    minlength:15
                },
                
            },
            messages: {
                name: {
                    required: "Customer Name is required",
                },
                mNumber: {
                    required: "Mobile Number is required",
                    minlength: "Length must be 10 digit"
                },
                password: {
                    required: "Password is required",
                    email: "Enter a 6 digit password"
                },
                lName: {
                    required: "Licence Name is required", range: "Value must be between 0 and 5"
                },
                lNumber: {
                    required: "Licence Number is required",
                    range: "Licence Number must be 15 digit"
                },

            }
        });
        return form.valid();
    }

    $('#createAccount').hide();
            


    $("#btnCreateAccount").click(function () {
        console.info("click form...........");
        if (doValidate_frmReg()) {
            var name = $('#name').val();
            var password = $('#password').val();
            var mNumber = $('#mNumber').val();
            var lName = $('#lName').val();
            var lNumber = $('#lNumber').val();
            var newUser = {
                username: name,
                password: password,
                mNumber: mNumber,
                lName:lName,
                lNumber: lNumber,

            };
            localStorage.setItem('userAccount', JSON.stringify(newUser));
            //addData(name,password,mNumber,lName,lNumber);
            checkUserAccount(); // Re-check the user account
        };

    });


    checkUserAccount();


   
    // scroll auton to pages -----------------------------------------------
    $('.navbar-link').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 200);
    });

    $('#booknow').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 200);
       
    });
    
    $('#profile').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 200);
       
    });

    $('#da').on('click', function() {

        localStorage.removeItem('userAccount');
        location.reload();
       
    });

    $("#btnBook1").click(function () {
        fetchBookingData();
        userData = localStorage.getItem('userAccount');

    if (userData) {
        
       
        var user = JSON.parse(userData);
        addBookingData(user.username,"Mustang");
        alert('Congratulations! You have booked '+ "Mustang");
    }
    if(user==null){
        $('#createAccount').fadeIn(1000);
        
        $('html, body').animate({
            scrollTop: $('#createAccount').offset().top
        }, 200);
    }
    });

    $("#btnBook2").click(function () {
        fetchBookingData();
        userData = localStorage.getItem('userAccount');

    if (userData) {
        
       
        var user = JSON.parse(userData);
        addBookingData(user.username,"BMW 3 Series");
        alert('Congratulations! You have booked '+ "BMW 3 Series");
        console.info("Congratulations! You have booked BMW 3 Series");
    }
    if(user==null){
        $('#createAccount').fadeIn(1000);
        
        $('html, body').animate({
            scrollTop: $('#createAccount').offset().top
        }, 200);
    }
    });

    $("#btnBook3").click(function () {
        fetchBookingData();
        userData = localStorage.getItem('userAccount');

    if (userData) {
        
       
        var user = JSON.parse(userData);
        addBookingData(user.username,"Volkswagen T-Cross");
        alert('Congratulations! You have booked '+ "Volkswagen T-Cross");
        console.info("Congratulations! You have booked Volkswagen T-Cross");
    }
    if(user==null){
        $('#createAccount').fadeIn(1000);
        
        $('html, body').animate({
            scrollTop: $('#createAccount').offset().top
        }, 200);
    }
    });

    $("#btnBook4").click(function () {
        fetchBookingData();
        userData = localStorage.getItem('userAccount');

    if (userData) {
        
       
        var user = JSON.parse(userData);
        addBookingData(user.username,"Cadillac Escalade");
        alert('Congratulations! You have booked '+ "Cadillac Escalade");
        
        console.info("Congratulations! You have booked Cadillac Escalade");
    }
    if(user==null){
        $('#createAccount').fadeIn(1000);
        
        $('html, body').animate({
            scrollTop: $('#createAccount').offset().top
        }, 200);
    }
    });

    $("#btnBook5").click(function () {
        fetchBookingData();
        userData = localStorage.getItem('userAccount');

    if (userData) {
        
       
        var user = JSON.parse(userData);
        addBookingData(user.username,"BMW 4 Series GTI");
        alert('Congratulations! You have booked '+ "BMW 4 Series GTI");
        console.info("Congratulations! You have booked BMW 4 Series GTI");

    }
    if(user==null){
        $('#createAccount').fadeIn(1000);
        
        $('html, body').animate({
            scrollTop: $('#createAccount').offset().top
        }, 200);
    }
    });

    $("#btnBook6").click(function () {
        fetchBookingData();
        userData = localStorage.getItem('userAccount');

    if (userData) {
        
       
        var user = JSON.parse(userData);
        addBookingData(user.username,"BMW 4 Series");
        alert('Congratulations! You have booked '+ "BMW 4 Series");
        
        console.info("Congratulations! You have booked BMW 4 Series");
    }
    if(user==null){
        $('#createAccount').fadeIn(1000);
        
        $('html, body').animate({
            scrollTop: $('#createAccount').offset().top
        }, 200);
    }
    });


});

function checkUserAccount() {
    // Try to retrieve user data from localStorage
     userData = localStorage.getItem('userAccount');

    // Check if user data exists
    if (userData) {
        // Parse the user data
       
        var user = JSON.parse(userData);
        $('#mp').html('<h4>Hello! '+user.username+'</h4>');
        console.info("....................."+user);
        $('#createAccount').hide();

         } else {
    
            $('#mp').html('<h4>Create Account</h4>');
        $('#profileContent').html('<p>You need to create an account before booking a car.</p>');

        // Bind click event to the create account button
        $('#mp').on('click', function() {

            $('#createAccount').fadeIn(1000);
            
            $('html, body').animate({
                scrollTop: $('#createAccount').offset().top
            }, 200); 
           
        });
    }
}