import React from "react";

const Contacts = () => {
  return (
    <section class="ContactUsStyle" id="ContactUs">
      <div class="ContentStyle">
        <h2 class="ContactUsIntroTitle">Want Talk!</h2>
        <p class="ContactUsIntroContent">
          If there is anything you would like to say or suggest , or there is
          work you would like to share or work on it together, or anything , let
          me know , please contact me.
        </p>
        <div class="ContactsStyle">
          <div class="ContactInfoStyle">
            <i class="fas fa-map-marker-alt"></i>
            <div class="ContactTitleStyle">Address</div>
            <div class="Info1Style">P3JF+HF4 , Kouba , Algeria</div>
            <div class="Info2Style">Zaouiet Kounta , Adrar</div>
          </div>
          <div class="ContactInfoStyle">
            <i class="fas fa-phone-alt"></i>
            <div class="ContactTitleStyle">Phone</div>
            <div class="Info1Style">+213 657 31 21 35</div>
            <div class="Info2Style">+213 664 61 06 76</div>
          </div>
          <div class="ContactInfoStyle">
            <i class="fas fa-envelope"></i>
            <div class="ContactTitleStyle">Email</div>
            <div class="Info1Style">lafkir.abdeldjalile35@g.ens-kouba.dz</div>
            <div class="Info2Style">ahmedjalallafkir@gmail.com</div>
          </div>
        </div>
        <form action="#">
          <div class="InputsStyle">
            <input type="text" placeholder=" Full name " />
          </div>
          <div class="InputsStyle">
            <input type="text" placeholder=" Example@g.ens-kouba.dz " />
          </div>
          <div class="message-box">
            <textarea placeholder=" What's on your mind ? "></textarea>
          </div>
          <div class="SendButton">
            <input type="submit" value="Start Conversation" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
