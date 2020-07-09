import $ from 'jquery';

function layout() {
// -------------------------------------- checkout

// payment
  const paymentCard = $('.checkout--payment-card');
  const paymentPaypal = $('.checkout--payment-paypal');
  const paymentOxxo = $('.payment-oxxo');
  const paymentBbva = $('.payment-bbva');
  const paymentCity = $('.payment-city');
  const checkoutAd = $('.checkout--ad');
  const svgCredit = $('.svg--credit');
  const svgPaypal = $('.svg--paypal');
  const svgOffline = $('.svg--offline');
  const svgMercado = $('.svg--mercado');

  $(() => {
    $('.checkout--payment-svg span').addClass('grayfade');
    $('.payment--options').change(() => {
      if ($(this).val() === 'none') {
        checkoutAd.hide();
        $('.checkout--payment-svg span').addClass('grayfade');
      }
      // credit/debit
      if ($(this).val() === 'payment-card') {
        paymentCard.show();
        checkoutAd.show();
        svgCredit.removeClass('grayfade');
        svgMercado.removeClass('grayfade');
        svgPaypal.addClass('grayfade');
        svgOffline.addClass('grayfade');
      } else {
        paymentCard.hide();
        checkoutAd.hide();
        svgCredit.addClass('grayfade');
        svgMercado.addClass('grayfade');
      }
      // paypal
      if ($(this).val() === 'payment-paypal') {
        paymentPaypal.show();
        svgPaypal.removeClass('grayfade');
        svgCredit.addClass('grayfade');
        svgOffline.addClass('grayfade');
        svgMercado.addClass('grayfade');
      } else {
        paymentPaypal.hide();
        svgPaypal.addClass('grayfade');
      }
      // mercado
      if ($(this).val() === 'payment-oxxo') {
        paymentOxxo.show();
        svgOffline.removeClass('grayfade');
        svgMercado.removeClass('grayfade');
        svgPaypal.addClass('grayfade');
        svgCredit.addClass('grayfade');
      } else {
        paymentOxxo.hide();
      }
      if ($(this).val() === 'payment-bbva') {
        paymentBbva.show();
        svgOffline.removeClass('grayfade');
        svgMercado.removeClass('grayfade');
        svgPaypal.addClass('grayfade');
        svgCredit.addClass('grayfade');
      } else {
        paymentBbva.hide();
      }
      if ($(this).val() === 'payment-city') {
        paymentCity.show();
        svgOffline.removeClass('grayfade');
        svgMercado.removeClass('grayfade');
        svgPaypal.addClass('grayfade');
        svgCredit.addClass('grayfade');
      } else {
        paymentCity.hide();
      }
    });
  });

  // -------------------------------------- addresses
  // const account_address_billing = $('.account--address-billing, .box--address-billing');
  // const btn_billing_no = $('.btn--billing-no');
  // const btn_billing_yes = $('.btn--billing-yes');

// btn_billing_yes.click(function() {
//   $(this).addClass("is-active")
//   btn_billing_no.removeClass("is-active")
//   account_address_billing.slideDown()
//   account_address_billing.addClass("is-flex")
// })
// btn_billing_no.click(function() {
//   $(this).addClass("is-active")
//   btn_billing_yes.removeClass("is-active")
//   account_address_billing.slideUp()
//   account_address_billing.removeClass("is-flex")
// })
}
module.exports = layout;
