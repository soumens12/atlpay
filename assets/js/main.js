/**
* Template Name: Logis
* Template URL: https://bootstrapmade.com/logis-bootstrap-logistics-website-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  // const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  // function mobileNavToogle() {
  //   document.querySelector('body').classList.toggle('mobile-nav-active');
  //   mobileNavToggleBtn.classList.toggle('bi-list');
  //   mobileNavToggleBtn.classList.toggle('bi-x');
  // }
  // mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();



  /**
   * Frequently Asked Questions Toggle
   */
  // document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
  //   faqItem.addEventListener('click', () => {
  //     faqItem.parentNode.classList.toggle('faq-active');
  //   });
  // });

  const accordionTitles = document.querySelectorAll(".faq-item");

  accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener("click", () => {
      if (accordionTitle.classList.contains("faq-active")) {
        accordionTitle.classList.remove("faq-active");
      } else {
        const accordionTitlesWithIsOpen = document.querySelectorAll(".faq-active");
        accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
          accordionTitleWithIsOpen.classList.remove("faq-active");
        });
        accordionTitle.classList.add("faq-active");
      }
    });
  });


  //contact form validation
  document.querySelector("#contactSubmit").addEventListener('click', (e)=>{

    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const designation = document.getElementById("designation").value;
    const userEmail = document.getElementById("userEmail").value;
    const userPhone = document.getElementById("userPhone").value;
    const companyWebsite = document.getElementById("companyWebsite").value;
    // const valIndustry = document.getElementById("valIndustry").value;
    const valEmployees = document.getElementById("valEmployees").value;
    const countrySelect = document.getElementById("country_select").value;
    const valVolume = document.getElementById("valVolume").value;
    const paymentMethod = document.getElementsByName("paymentMethod");
    

    const fnameError = document.getElementById("fname-error");
    const lnameError = document.getElementById("lname-error");
    const designationError = document.getElementById("designation-error");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const websiteError = document.getElementById("websiteError");
    // const industryError = document.getElementById("industryError");
    const employeeError = document.getElementById("employeeError");
    const countryError = document.getElementById("countryError");
    const volumeError = document.getElementById("volumeError");
    const pmethodError = document.getElementById("pmethodError");

    fnameError.textContent = "";
    lnameError.textContent = "";
    designationError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    websiteError.textContent = "";
    // industryError.textContent = "";
    employeeError.textContent = "";
    countryError.textContent = "";
    volumeError.textContent = "";
    pmethodError.textContent = "";

    let namePattern = /^[A-Za-z]+(?:[-' ][A-Za-z]+)*$/;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    let websitePattern = /^www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?([\/a-zA-Z0-9#?&=_-]*)?$/;

    let isValid = true;


    if(!namePattern.test(firstName)){
      document.getElementById("fname-error").textContent="First name is not valid";
      isValid = false;
    }
    if(!namePattern.test(lastName)){
      document.getElementById("lname-error").textContent="Last name is not valid";
      isValid = false;
    }
    if(!namePattern.test(designation)){
      document.getElementById("designation-error").textContent="Last name is not valid";
      isValid = false;
    }
    if(!emailPattern.test(userEmail)){
      document.getElementById("emailError").textContent="Work Email is not valid";
      isValid = false;
    }
    if(!phonePattern.test(userPhone)){
      document.getElementById("phoneError").textContent="Phone number must be of 10 digits. Example: 123-345-6789";
      isValid = false;
    }
    if(!websitePattern.test(companyWebsite)){
      document.getElementById("websiteError").textContent="Website Example: www.example.com";
      isValid = false;
    }
    // if(valIndustry === ""){
    //   document.getElementById("industryError").textContent="Please select your Industry";
    //   isValid = false;
    // }
    if(valEmployees === ""){
      document.getElementById("employeeError").textContent="Please select your Employee size";
      isValid = false;
    }
    if(countrySelect === ""){
      document.getElementById("countryError").textContent="Please select Country";
      isValid = false;
    }
    if(valVolume === ""){
      document.getElementById("volumeError").textContent="Please select Volume";
      isValid = false;
    }

    for (let i = 0; i<paymentMethod.length; i++) {
      if(paymentMethod[i].checked==true) {
        return true;
      }
      document.getElementById('pmethodError').textContent = "Please select payment method!";
      return false; // Prevent form submission
    }

    if(isValid){
      alert("Form has been submitted");
    }

  })


})();