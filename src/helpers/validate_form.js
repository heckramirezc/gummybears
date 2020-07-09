import $ from 'jquery-validation';
import 'jquery-validation/dist/additional-methods';

function validateForm() {
// Wait for the DOM to be ready
  $().ready(() => {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $.validator.addMethod('no_special_characters', value => /^[A-Za-zaáéíóúÁÉÍÓÚñÑ0,.-9\-\s_]+$/.test(value));
    $.validator.addMethod('alphanumeric', value => /[a-zA-Z0-9-]+$/.test(value));
    $("form[name='addresses']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        // Shipping Address
        s_first_name: {
          required: true,
          no_special_characters: true
        },
        s_last_name: {
          required: true,
          no_special_characters: true
        },
        s_address_line_1: {
          required: true,
          no_special_characters: true
        },
        s_address_line_2: 'required',
        s_state_or_province_name: { required: true },
        s_city: { required: true },
        s_store: { required: true },
        s_noExt: { required: true },
        s_email_1: {
          required: true,
          email: true
        },
        email_1_confirm: {
          email: true,
          required: true,
          equalTo: '#s_email'
        },
        s_phone_1: {
          required: true,
          digits: true,
          minlength: 8,
          maxlength: 8
        },
        s_postal_code: {
          required: true,
          digits: true,
          minlength: 5,
          maxlength: 5
        },
        s_person_1: {
          required: false
        },
        s_person_2: {
          required: false
        },
        s_references: {
          required: false
        },
        nit: {
          required: false
        },
        dpi: {
          required: true,
          minlength: 10,
          maxlength: 10,
        },
        dpiConfirm: {
          required: true,
          minlength: 10,
          maxlength: 10,
          equalTo: '#dpi'
        },
        s_dpiConfirm: {
          required: true,
          minlength: 10,
          maxlength: 10,
          equalTo: '#dpi'
        },
        // Billing Address
        b_first_name: {
          required: true,
          no_special_characters: true
        },
        b_last_name: {
          required: true,
          no_special_characters: true
        },
        b_address_line_1: {
          required: true,
          no_special_characters: true
        },
        b_state_or_province_name: { required: true },
        b_city: 'required',
        b_address_line_2: 'required',
        b_noExt: 'required',
        b_email_1: {
          required: true,
          email: true
        },
        b_phone_1: {
          required: true,
          digits: true,
          minlength: 8,
          maxlength: 8
        },
        b_postal_code: {
          required: true,
          digits: true,
          minlength: 5,
          maxlength: 5
        }
        // rfc:"false",
        // razon_social:"false"
      },
      // Specify validation error messages
      messages: {
        s_first_name: {
          required: 'Su nombre no fue capturado',
          no_special_characters: 'Favor de eliminar caracteres especiales'
        },
        s_last_name: {
          required: 'Sus apellidos no fueron capturados',
          no_special_characters: 'Favor de eliminar caracteres especiales'
        },
        s_address_line_1: {
          required: 'Por favor, introduzca la calle',
          no_special_characters: 'Favor de eliminar caracteres especiales'
        },
        s_store: 'Por favor, seleccione la tienda.',
        s_city: 'Por favor, introduzca el departamento.',
        s_state_or_province_name: 'Por favor, introduzca el municipio.',
        s_address_line_2: 'Por favor, introduzca la zona/poblado.',
        s_email_1: {
          email: 'Por favor, introduzca un correo electrónico válido.',
          required: 'Por favor, introduzca su dirección de correo electrónico.'
        },
        email_1_confirm: {
          email: 'Por favor, introduzca un correo electrónico válido.',
          required: 'Por favor, introduzca su confirmación de correo electrónico.',
          equalTo: 'Su confirmación de correo electrónico debe coincidir.'
        },
        s_noExt: 'Por favor, introduzca su número.',
        s_postal_code: {
          required: 'Por favor, introduzca el código postal.',
          digits: 'Por favor, introduzca el código postal válido.',
          minlength: 'Por favor, introduzca el código postal válido.',
          maxlength: 'Por favor, introduzca el código postal válido.'
        },
        s_phone_1: {
          required: 'Por favor, introduzca el número de teléfono.',
          digits: 'Por favor, introduzca el número de teléfono válido.',
          minlength: 'Por favor, introduzca el número de teléfono válido.',
          maxlength: 'Por favor, introduzca el número de teléfono válido.'
        },
        s_person_1: 'Su nombre no fue capturado. Favor de eliminar caracteres especiales.',
        s_person_2: 'Su nombre no fue capturado. Favor de eliminar caracteres especiales.',
        s_references: 'Su referencia no fue capturada. Favor de eliminar caracteres especiales.',
        // Billing Address
        b_first_name: {
          required: 'Su nombre no fue capturado',
          no_special_characters: 'Favor de eliminar caracteres especiales'
        },
        b_last_name: {
          required: 'Sus apellidos no fueron capturados',
          no_special_characters: 'Favor de eliminar caracteres especiales'
        },
        b_address_line_1: {
          required: 'Por favor, introduzca la calle',
          no_special_characters: 'Favor de eliminar caracteres especiales'
        },
        b_city: 'Por favor, introduzca la departamento.',
        b_state_or_province_name: 'Por favor, introduzca el municipio.',
        b_address_line_2: 'Por favor, introduzca la zona/poblado.',
        b_email_1: {
          email: 'Por favor, introduzca un correo electrónico válido.',
          required: 'Por favor, introduzca su dirección de correo electrónico.'
        },
        b_noExt: 'Por favor, introduzca su número.',
        b_postal_code: {
          required: 'Por favor, introduzca el código postal.',
          digits: 'Por favor, introduzca el código postal válido.',
          minlength: 'Por favor, introduzca el código postal válido.',
          maxlength: 'Por favor, introduzca el código postal válido.'
        },
        b_phone_1: {
          required: 'Por favor, introduzca el número de teléfono.',
          digits: 'Por favor, introduzca el número de teléfono válido.',
          minlength: 'Por favor, introduzca el número de teléfono válido.',
          maxlength: 'Por favor, introduzca el número de teléfono válido.'
        },
        dpi: {
          required: 'Por favor introduzca un DUI válido',
          digits: 'Por favor ingrese solo dígitos.',
          minlength: 'Por favor ingrese al menos 13 caracteres.'
        },
        dpiConfirm: {
          required: 'Por favor introduzca un DUI válido',
          minlength: 'Por favor ingrese al menos 13 caracteres.',
          equalTo: 'El número no coincide, favor de revisar'
        },
        s_dpiConfirm: {
          required: 'Por favor introduzca un DUI válido',
          digits: 'Por favor ingrese solo dígitos.',
          equalTo: 'El número no coincide, favor de revisar',
          minlength: 'Por favor ingrese al menos 13 caracteres.'
        },
        s_invoice_type: {
          required: 'Por favor seleccione un tipo de factura',
        },
        b_fiscal_number: {
          required: 'Por introduzca un número fiscal válido',
        },
        b_address_line_1: {
          required: 'Por introduzca una dirección válida',
        },
        b_twirl: {
          required: 'Por introduzca un giro válido',
        },
        nit: 'El NIT debe ser alfanumérico de 4 a 14 dígitos.'
      }
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      // submitHandler: function(form) {
      // form.submit();
      // }
    });

    $.validator.addMethod('cvv', value => /[\d]/.test(value));
    $.validator.addMethod('alphanumeric_with_accents', value => /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/.test(value));

    $("form[name='payment']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        // Shipping Address
        holder: {
          required: true,
          alphanumeric_with_accents: true
        },
        cardNumber: {
          required: true,
          digits: true,
          minlength: 15,
          maxlength: 16
        },
        cvv: {
          digits: true,
          required: true,
          minlength: 3,
          maxlength: 4
        },
        month: {
          required: true
        },
        year: {
          required: true
        },

      },
      // Specify validation error messages
      messages: {
        holder: 'Por favor, introduzca un nombre valido',
        cardNumber: {
          required: 'Por favor, introduzca una tarjeta de crédito.',
          creditcard: 'Por favor, introduzca una tarjeta válida.',
          minlength: 'Por favor ingrese al menos 15 caracteres.',
          maxlength: 'Por favor, no ingrese más de 16 caracteres.',
          digits: 'Por favor ingrese solo dígitos.'
        },
        cvv: {
          required: 'Por favor, introduzca el código de seguridad.',
          digits: 'Por favor, introduzca el código de seguridad válido.',
          minlength: 'Por favor, introduzca el código de seguridad válido.',
          maxlength: 'Por favor, introduzca el código de seguridad válido.'
        },
        month: 'Por favor, seleccione un mes de expiración válido.',
        year: 'Por favor, seleccione un año de expiración válido.'
      }
    });

    $.validator.addMethod('passcheck', value => /^(?=.*[A-Za-z])(?=.*\d)([A-Za-z\d]|[^ ]){8,16}$/.test(value));
    $.validator.addMethod('requiresCapital', value => /[A-Z]/.test(value));
    $.validator.addMethod('requiresNumber', value => /[0-9]/.test(value));
    $.validator.addMethod('requiresSymbol', value => /[!@#$%&*,.]/.test(value));


    $("form[name='registerCheckout']").validate({
      rules: {
        first_name: 'required',
        last_name: 'required',

        email_1: {
          required: true,
          email: true
        },
        registerPass: {
          required: true,
          // passcheck: true,
          minlength: 8,
          maxlength: 16,
          requiresCapital: true,
          requiresNumber: true,
          requiresSymbol: true,
        },
        registerPassConfirm: {
          required: true,
          minlength: 8,
          equalTo: '#registerPass'
        },
        phone_1: {
          required: true,
          digits: true,
          minlength: 8,
          maxlength: 8
        },
        dpi: {
          required: true,
          digits: true
        },
        dpiConfirm: {
          required: true,
          equalTo: '#dpi'
        },
        day: {
          required: true
        },
        month: {
          required: true
        },
        year: {
          required: true
        },
        registerCompliance: {
          required: true
        }
      },
      messages: {
        first_name: 'Su nombre no fue capturado.',
        last_name: 'Sus apellidos no fueron capturados.',
        email_1: {
          email: 'Por favor, introduzca un correo electrónico válido.',
          required: 'Por favor, introduzca su dirección de correo electrónico.'
        },
        phone_1: {
          required: 'Por favor, introduzca el número de teléfono.',
          digits: 'Por favor, introduzca el número de teléfono válido.',
          minlength: 'Por favor, introduzca el número de teléfono válido.',
          maxlength: 'Por favor, introduzca el número de teléfono válido.'
        },
        dpi: 'Por favor, introduzca un DUI valido',
        dpiConfirm: {
          required: 'Por favor, introduzca un DUI valido.',
          minlength: 'Por favor, introduzca el número de teléfono válido.',
          equalTo: 'Su confirmación de DUI debe coincidir.'
        },
        day: 'Por favor, introduzca el día.',
        month: 'Por favor, introduzca el mes.',
        year: 'Por favor, introduzca el año.',
        registerCompliance: 'Debes aceptar lo términos y condiciones para continuar.'
      }
    });

    $("form[name='address_edit']").validate({
      rules: {
        a_first_name: {
          required: true,
          no_special_characters: true
        },
        a_last_name: {
          required: true,
          no_special_characters: true
        },
        a_address_line_1: {
          required: true,
          no_special_characters: true
        },
        a_address_line_2: 'required',
        a_number_ext: 'required',
        a_street: 'required',
        a_city: 'required',
        a_state_or_province_name: { required: true },
        a_postal_code: {
          required: true,
          digits: true,
          minlength: 5,
          maxlength: 5
        },
        a_email_1: {
          required: true,
          email: true
        },
        a_phone_1: {
          required: true,
          digits: true,
          minlength: 8,
          maxlength: 8
        }
      },
      messages: {
        a_first_name: 'Su nombre no fue capturado.',
        a_last_name: 'Sus apellidos no fueron capturados.',
        a_street: 'Por favor, introduzca la calle.',
        a_address_line_2: 'Por favor, introduzca la zona/poblado.',
        a_city: 'Por favor, introduzca la departamento.',
        a_state_or_province_name: 'Por favor, introduzca el municipio.',
        a_email_1: {
          email: 'Por favor, introduzca un correo electrónico válido.',
          required: 'Por favor, introduzca su dirección de correo electrónico.'
        },
        a_number_ext: 'Por favor, introduzca su número.',
        a_postal_code: {
          required: 'Por favor, introduzca el código postal.',
          digits: 'Por favor, introduzca el código postal válido.',
          minlength: 'Por favor, introduzca el código postal válido.',
          maxlength: 'Por favor, introduzca el código postal válido.'
        },
        a_phone_1: {
          required: 'Por favor, introduzca el número de teléfono.',
          digits: 'Por favor, introduzca el número de teléfono válido.',
          minlength: 'Por favor, introduzca el número de teléfono válido.',
          maxlength: 'Por favor, introduzca el número de teléfono válido.'
        },
      },
    });

    $("form[name='resetPassword']").validate({
      rules: {
        email: {
          required: true,
          email: true
        },
      },
      messages: {
        email: {
          email: 'Por favor, introduzca un correo electrónico válido.',
          required: 'Por favor, introduzca su dirección de correo electrónico.'
        }
      }
    });

    $("form[name='passRequested']").validate({
      rules: {
        code: {
          required: true
        },
        password: {
          required: true,
          //passcheck: true,
          minlength: 8,
          maxlength: 16,
          requiresCapital: true,
          requiresNumber: true,
          requiresSymbol: true,
        },
        confirmPassword: {
          required: true,
          equalTo: '#password'
        },
      },
      messages: {
        code: {
          required: 'Por favor, introduzca su código de validación.',
        },
      }
    });

    $("form[name='profile']").validate({
      rules: {
        first_name: 'required',
        last_name: 'required',
        email_1: {
          required: true,
          email: true
        },
        phone_1: {
          required: true,
          digits: true,
          minlength: 8,
          maxlength: 8
        },
        day: { required: true },
        month: { required: true },
        year: { required: true },
        gender: { required: true }
      },
      messages: {
        first_name: 'Su nombre no fue capturado.',
        last_name: 'Sus apellidos no fueron capturados.',
        email_1: {
          email: 'Por favor, introduzca un correo electrónico válido.',
          required: 'Por favor, introduzca su dirección de correo electrónico.'
        },
        phone_1: {
          required: 'Por favor, introduzca el número de teléfono.',
          digits: 'Por favor, introduzca el número de teléfono válido.',
          minlength: 'Por favor, introduzca el número de teléfono válido.',
          maxlength: 'Por favor, introduzca el número de teléfono válido.'
        },
        day: 'Por favor, introduzca el día.',
        month: 'Por favor, introduzca el mes.',
        year: 'Por favor, introduzca el año.',
        gender: 'Por favor, introduzca su sexo.'
      }
    });

    $("form[name='contact']").validate({
      rules: {
        name: 'required',
        email: 'required'
      },
      messages: {
        name: 'Su nombre no fue capturado.',
        email: 'Su correo electrónico no fue capturado.'
      }
    });

    $("form[name='newsletter']").validate({
      rules: {
        email: 'required'
      },
      messages: {
        email: 'Su correo electrónico no fue capturado.'
      }
    });
  });
}

export default validateForm;
